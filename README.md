 # Emergify: Health Emergency System
 
Emergify is an AI-powered health emergency responder designed to save lives in communities with inefficient emergency systems and in disaster zones where trainned medical professionals and volunteers are not able to access (physically distant but eager to help).

## Features
1. **First Aid Guidance**: Provides clear instructions on managing emergency situations using Google’s Gemini AI, trained on extensive emergency scenarios.
2. **Hospital Locator**: Identifies and ranks the nearest hospitals best equipped to handle the specific emergency, ensuring users get the best possible care.
3. **Remote Medics**: Connects users with remote medical professionals during disasters, utilizing Gemini AI to match the patient with the appropriate specialist.

### Accessibility and Inclusivity
Emergify is available via web, mobile and SMS, making it usable even with limited internet access. The voice mode feature on the web and app ensures that users with disabilities can navigate the app effortlessly. This allows users to navigate the app entirely with voice commands. For example, saying, "Hey Responder, take me to first aid," directs the app to the first aid section

### Integration and Experience
Emergify offers a seamless experience through both web and mobile apps, providing real-time hospital data and AI-driven first aid instructions. Emergify also offers *API access for state governments and organizations* to integrate into their emergency infrastructure.

### API Request
```sh
curl -X POST https://emergify.pages.dev/api/v1/locate-hospital \
     -H "Content-Type: application/json" \
     -d '{
           "situation": "Someone fell suddenly in the mall and is unconscious",
           "location": "Lagos Mainland" # [long, lat] for better proximity
         }'
```
### Example Response
```json
{
  "status": 200,
  "message": "Request Successful",
  "data": [
    {
      "id": "o8G2UcaRPBBRt5F17",
      "name": "Mainland Hospital Yaba",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/twitterv2-43c82.appspot.com/o/images%2F-mainland-hospitalc8sj2IO2I4-unsplash.jpg?alt=media&token=335a1871-e55a-43a1-a4ba-327dd3254dcf",
      "address": "G9CG+VPC, Mainland Hospital Rd, Yaba, Lagos 100001, Lagos",
      "open": true,
      "distance": 14.8,
      "score": 12,
      "googleMapUrl": "https://maps.app.goo.gl/o8G2UcaRPBBRt5F17"
    },
    ....
  ]
}
```

## Technologies
- Next.js
- Gemini AI
- Firebase
- PicoVoice
- TypeScript

## How We Use Gemini
Using Gemini, we can take a description of a situation, such as "He is coughing up blood from his mouth," and process it to determine the best specialties and treatments the patient needs. For example, with our system prompt:

### System prompt
```
You are an ai agent designed to be used for health emergency situation and you return only json as output. This is the full list of relevant emergency treatments and specialities hospitals,clinic and primary health center can offer. ```TREATMENTS
Acute Renal Failure, Cardiac Arrest, Heart Attack, Stroke, Pulmonary Embolism, Pneumonia, Tuberculosis, CT Scan, MRI, Ultrasound, X-ray, Beating Heart Surgery, Bentall Procedure, Brain & Spinal Cord Cancer, Breast Cancer, Cardiovascular Surgery, Coronary Artery Bypass Grafting, Epilepsy Surgery, Heart Transplant, Heart Valve Surgery (Repair, Replacement), Kidney Transplant, Liver Transplant, Lung Cancer, Paediatric Cardiac Surgery, Open Heart Surgery, Stentless Heart Valve Surgeries, Trauma Care, Normal & Instrumental Delivery, High Risk Pregnancy, Uterine Cancer, Ovarian Cancer

SPECIALITIES
-----------

Arthroscopy & Sports Medicine, Cardiac Surgery, Cardiology, Critical Care Medicine, Emergency Medicine, ENT, Gastroenterology Surgical, Gastroenterology Medical, General Medicine/Internal Medicine, General Surgery, Haematology, Interventional Radiology, Lab Medicine, Medical Oncology, Minimal Access Surgery, Neonatology, Nephrology, Neurology, Neurosurgery, Orthopaedics, Paediatric Cardiac Surgery, Paediatric Cardiology, Paediatric Neurology, Paediatric Neurosurgery, Paediatric Surgery, Paediatric Urology, Paediatrics, Pulmonology, Radiology, Surgical Oncology, Urology, Vascular & Endovascular Surgery, Vascular & Interventional Radiology, Vascular Surgery```  


Command: You will be provided a desciption of an emergency situation. Your goal is to figure out that based on the situation given what emergency treatments and specialities would be in need andusesful to treat the situation. Make sure you response is a parsable json exactly like this  ```{
  specialities: string[];
  treatments: string[];
```


### Example Prompt
Someone is in an health emergency sitation and you will be given a desciption about the situation. do your best to generate the treatment from the list to figure out possible treatment and situation and return the json output. Description of Situation:{user situation input i.e "He is coughing out blood out of his mouth"} 

### Example Ouput


```json
{
  "specialities": [
    "Emergency Medicine",
    "Pulmonology",
    "Critical Care Medicine",
    "Radiology",
    "Cardiovascular Surgery",
    "Thoracic Surgery"
  ],
  "treatments": [
    "CT Scan",
    "X-ray",
    "Pneumonia",
    "Tuberculosis",
    "Pulmonary Embolism",
    "Trauma Care",
    "Beating Heart Surgery"
  ]
}
```

This data is then passed to a custom ranking algorithm that sorts hospitals in our database based on the similarity and proximity of the hospital using their geocoded location, e.g., "Lagos Mainland, Lagos." As the result is sent, an Emergify note is given to the user, which uses Gemini to explain why the hospital or medics were recommended.

### Ranking Function
```javascript
interface Hospital {
  id: string;
  specialities: string[];
  treatments: string[];
}

// Function to calculate the similarity score
function calculateSimilarity(
  hospital: Hospital,
  patientHospital: Hospital,
): number {
  function intersection(arr1: string[], arr2: string[]): number {
    const intersection = arr1.filter((item) => arr2.includes(item)).length;
    const union = new Set([...arr1, ...arr2]).size;
    return intersection / union;
  }

  const specialitiesScore = intersection(
    hospital.specialities,
    patientHospital.specialities,
  );
  const treatmentsScore = intersection(
    hospital.treatments,
    patientHospital.treatments,
  );

  // Weighted sum of the scores
  return specialitiesScore * 0.6 + treatmentsScore * 0.4;
}


function rankHospitals(
  hospitals: Hospital[],
  patientHospital: Hospital,
): { score: number; id: string }[] {
  return hospitals
    .map((hospital) => ({
      id: hospital.id,
      score: calculateSimilarity(hospital, patientHospital),
    }))
    .sort((a, b) => b.score - a.score);
}

```



## Cloning and Environment Setup

### Step 1: Clone the Repository

First, you need to clone the repository to your local machine. Open your terminal and run the following command:

```sh
git clone https://github.com/haruna2004/emergify.git
```

### Step 2: Install Dependencies

Before you can run the project, you need to install all the necessary dependencies. Make sure you have Node.js installed (you can download it from [here](https://nodejs.org/)). Then, run the following command to install the dependencies:

```sh
cd emergify
npm install
```

### Step 4: Set Up Environment Variables

Create a `.env` file in the root directory of your project. You can use the `env.example` file provided as a template. Copy the contents of `env.example` into your newly created `.env` file:

```sh
cp env.example .env
```

Then, open the `.env` file and fill in the necessary environment variables.

### Step 5: Run the Development Server

Now that you have everything set up, you can run the development server:

```sh
npm run dev
```

Open your browser and go to `http://localhost:3000` to see your application in action.

## Team & Appreciation
- **Haruna Faruk**(Team Lead) - Software Engineer
- **David Mark** - Backend Engineer
- **Ibraheem Ademoye** - Product Designer

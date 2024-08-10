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
    // return arr1.filter((item) => arr2.includes(item)).length;
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

// user input -> He fell down and he is unconcious

// Example usage
const tC: Hospital = {
  id: "2abc3",
  specialities: ["trauma surgery", "emergency medicine", "orthopedics"],
  treatments: ["ICU", "emergency room", "operating room"],
};

const gH: Hospital = {
  id: "1abc3",
  specialities: [
    "general surgery",
    "internal medicine",
    "pediatrics",
    "cardiology",
    "orthopedics",
    "neurology",
    "gynecology",
    "dermatology",
    "radiology",
    "urology",
    "gastroenterology",
    "endocrinology",
  ],
  treatments: [
    "emergency room",
    "ICU",
    "operating room",
    "radiology department",
    "outpatient clinic",
    "laboratory",
    "pharmacy",
    "pediatric ward",
    "maternity ward",
    "rehabilitation center",
    "dialysis unit",
    "oncology unit",
  ],
};

const patientHospital: Hospital = {
  id: "patient",
  specialities: [
    "trauma surgery",
    "emergency medicine",
    "orthopedics",
    "radiology",
  ],
  treatments: [
    "ICU",
    "emergency room",
    "operating room",
    "radiology department",
    "oncology unit",
  ],
};

const nBH: Hospital[] = [tC, gH];

let promptInput = "He got it by a car and he is bleeding";

const rankedHospitals = rankHospitals(nBH, patientHospital);
console.log(rankedHospitals);

const hospital3 = {
  hospital_name: "General Hospital",
  treatments: [
    "Chemotherapy",
    "Radiation Therapy",
    "Surgery",
    "Pain Management",
  ],
  specialties: ["Oncology", "Cardiology", "Neurology"],
};

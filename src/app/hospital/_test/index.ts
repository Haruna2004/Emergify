interface Hospital {
  id: string;
  specialities: string[];
  facilities: string[];
  others: string[];
}

let traumaCenter: Hospital = {
  id: "2abc4",
  specialities: [
    "trauma surgery",
    "emergency medicine",
    "orthopedic trauma",
    "neurosurgery",
    "critical care",
    "anesthesiology",
    "radiology",
    "plastic surgery",
    "vascular surgery",
    "cardiothoracic surgery",
  ],
  facilities: [
    "emergency room",
    "trauma bay",
    "ICU",
    "operating room",
    "radiology department",
    "helicopter landing pad",
    "recovery room",
    "burn unit",
    "rehabilitation center",
    "blood bank",
    "acute care unit",
    "pharmacy",
  ],
  others: [
    "stethoscope",
    "defibrillator",
    "ventilator",
    "MRI machine",
    "CT scanner",
    "X-ray machine",
    "ultrasound machine",
    "electrocardiogram (ECG) machine",
    "infusion pump",
    "blood pressure monitor",
    "surgical instruments",
    "patient monitoring system",
    "crash cart",
    "splints and casts",
    "IV fluids and medications",
  ],
};

let generalHospital: Hospital = {
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
  facilities: [
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

  others: [
    "stethoscope",
    "defibrillator",
    "ventilator",
    "MRI machine",
    "CT scanner",
    "X-ray machine",
    "ultrasound machine",
    "electrocardiogram (ECG) machine",
    "infusion pump",
    "blood pressure monitor",
    "surgical instruments",
    "patient monitoring system",
  ],
};

let promptInput = "He got it by a car and he is bleeding";

let pT: Hospital = {
  id: "patient",
  specialities: [
    "trauma surgery",
    "emergency medicine",
    "orthopedics",
    "radiology",
  ],
  facilities: [
    "ICU",
    "emergency room",
    "operating room",
    "radiology department",
  ],
  others: [
    "stethoscope",
    "defibrillator",
    "ventilator",
    "MRI",
    "X-ray machine",
  ],
};

const nearByHospitals: Hospital[] = [traumaCenter, generalHospital];

// returns an array of id of hospitals i.e [{score: "2.3", id: "1abc"},{score: "1", id: "2abc3"}]
// function rankHospitals(hospitals: Hospital[]) {

//   return [];
// }

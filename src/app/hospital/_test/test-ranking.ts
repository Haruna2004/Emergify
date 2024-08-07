import { HospitalDb , PatientType} from "@/lib/types";



function calculateSimilarity(
  hospital: HospitalDb,
  patientHospital: PatientType,
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
  const facilitiesScore = intersection(
    hospital.treatments,
    patientHospital.treatments,
  );
  // const othersScore = intersection(hospital.others, patientHospital.others);

  // Weighted sum of the scores
  return specialitiesScore * 0.6 + facilitiesScore * 0.4;
}

export function rankHospitals(
  hospitals: HospitalDb[],
  patientHospital: PatientType,
): { score: number; id: string }[] {
  return hospitals
    .map((hospital) => ({
      id: hospital.hospitalId,
      score: calculateSimilarity(hospital, patientHospital),
    }))
    .sort((a, b) => b.score - a.score);
}

// Example usage
// const tC: Hospital = {
//   id: "2abc3",
//   specialities: ["trauma surgery", "emergency medicine", "orthopedics"],
//   facilities: ["ICU", "emergency room", "operating room"],
//   others: ["stethoscope", "defibrillator", "ventilator"],
// };

// const gH: Hospital = {
//   id: "1abc3",
//   specialities: [
//     "general surgery",
//     "internal medicine",
//     "pediatrics",
//     "cardiology",
//     "orthopedics",
//     "neurology",
//     "gynecology",
//     "dermatology",
//     "radiology",
//     "urology",
//     "gastroenterology",
//     "endocrinology",
//   ],
//   facilities: [
//     "emergency room",
//     "ICU",
//     "operating room",
//     "radiology department",
//     "outpatient clinic",
//     "laboratory",
//     "pharmacy",
//     "pediatric ward",
//     "maternity ward",
//     "rehabilitation center",
//     "dialysis unit",
//     "oncology unit",
//   ],
//   others: [
//     "stethoscope",
//     "defibrillator",
//     "ventilator",
//     "MRI machine",
//     "CT scanner",
//     "X-ray machine",
//     "ultrasound machine",
//     "electrocardiogram (ECG) machine",
//     "infusion pump",
//     "blood pressure monitor",
//     "surgical instruments",
//     "patient monitoring system",
//   ],
// };

// const patientHospital: Hospital = {
//   id: "patient",
//   specialities: [
//     "trauma surgery",
//     "emergency medicine",
//     "orthopedics",
//     "radiology",
//   ],
//   facilities: [
//     "ICU",
//     "emergency room",
//     "operating room",
//     "radiology department",
//     "oncology unit",
//   ],
//   others: [
//     "stethoscope",
//     "defibrillator",
//     "ventilator",
//     "MRI",
//     "X-ray machine",
//   ],
// };

// const nBH: Hospital[] = [tC, gH];

// let promptInput = "He got it by a car and he is bleeding";

// returns an array of id of hospitals i.e [{score: "2.3", id: "1abc"},{score: "1", id: "2abc3"}]
// function rankHospitals(hospitals: Hospital[]) {

//   return [];
// }

// const rankedHospitals = rankHospitals(nBH, patientHospital);
// console.log(rankedHospitals);

// const hospital3 = {
//   hospital_name: "General Hospital",
//   treatments: [
//     "Chemotherapy",
//     "Radiation Therapy",
//     "Surgery",
//     "Pain Management",
//   ],
//   specialties: ["Oncology", "Cardiology", "Neurology"],
//   facilities: [
//     "Emergency Room",
//     "Intensive Care Unit (ICU)",
//     "Operating Room",
//     "Cancer Center",
//     "Radiology Department",
//   ],
// };

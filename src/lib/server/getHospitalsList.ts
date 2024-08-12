import { generatePatientObject, rankHospitals } from "./hospital";

export async function getHospitals(sitaution: string, hospitals: string) {
  const patientTS = await generatePatientObject(sitaution);

  if (!patientTS) return;

  console.log("patient", patientTS);

  const rankedHospitals = await rankHospitals(patientTS, hospitals);

  console.log(rankedHospitals);

  return rankedHospitals;
}

import { hospitalSysPrompt, userSituation } from "@/contants/ai";
import { getAiResponse } from "../aiResponse";
import { PatientType } from "@/lib/types";
import { isPatientType } from "@/lib/utils";

const SPECIALITIES_WEIGHT = 0.4;
const TREATMENT_WEIGHT = 0.6;

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
  return (
    specialitiesScore * SPECIALITIES_WEIGHT + treatmentsScore * TREATMENT_WEIGHT
  );
}

export async function rankHospitals(patient: any, hospitals: any) {
  "List of ranked hospitals";
  return hospitals
    .map((hospital: any) => ({
      score: calculateSimilarity(hospital, patient),
      ...hospital,
    }))
    .sort((a: any, b: any) => b.score - a.score);
}

export async function generatePatientObject(
  situation: string,
  maxRetries: number = 1,
): Promise<PatientType | null> {
  try {
    // second retry
    if (maxRetries <= 0) {
      const aiTextResonse = await getAiResponse(userSituation(situation), {
        systemPrompt: hospitalSysPrompt,
        responseMimeType: "application/json",
      });

      const validData = JSON.parse(aiTextResonse);
      return isPatientType(validData) ? validData : null;
    }

    const aiTextResonse = await getAiResponse(userSituation(situation), {
      systemPrompt: hospitalSysPrompt,
      responseMimeType: "application/json",
    });
    const validData = JSON.parse(aiTextResonse);

    const isPatient = isPatientType(validData);
    if (isPatient) return validData;

    const result: PatientType | null = await generatePatientObject(
      userSituation(situation),
      0,
    );

    return result;
  } catch (error) {
    console.log(`An error occured retryed ${maxRetries}/1`);
    const result: PatientType | null = await generatePatientObject(
      situation,
      0,
    );
    return result;
  }
}

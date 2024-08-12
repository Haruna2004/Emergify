import { hospitalSysPrompt, userSituation } from "@/contants/ai";
import { getAiResponse } from "../aiResponse";
import { PatientType } from "@/lib/types";
import { isPatientType } from "@/lib/utils";

// helper functions for processing hospital functions on the server
const DEFAULT_ADDRESS = {
  city: "Lagos Mainland",
  state: "Lagos",
  country: "Nigeria",
};

export async function getCordsAddress(cordinates: string[]) {
  return DEFAULT_ADDRESS;
}

// Fetch an arry of hospitals from firebase
export async function fetchHospitals(address: any) {}

export async function rankHospitals(patient: any, hospitals: any) {
  return "List of ranked hospitals";
}

export async function generatePatientObject(
  situation: string,
  maxRetries: number = 1,
): Promise<PatientType | null> {
  try {
    // second retry
    if (maxRetries <= 0) {
      const aiTextResonse = await getAiResponse(situation, {
        systemPrompt: hospitalSysPrompt,
        responseMimeType: "application/json",
      });

      const validData = JSON.parse(aiTextResonse);
      return isPatientType(validData) ? validData : null;
    }

    const aiTextResonse = await getAiResponse(situation, {
      systemPrompt: hospitalSysPrompt,
      responseMimeType: "application/json",
    });
    const validData = JSON.parse(aiTextResonse);

    const isPatient = isPatientType(validData);
    if (isPatient) return validData;

    const result: PatientType | null = await generatePatientObject(
      situation,
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

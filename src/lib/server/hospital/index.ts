// helper functions for processing hospital functions on the server
import { LocationType, HospitalDb, PatientType } from "@/lib/types";
import { isPatientType } from "@/lib/utils";
import { getAiResponse } from "../aiResponse";
import { rankHospitals } from "@/app/hospital/_test/test-ranking";
import fs from "fs";

const DEFAULT_ADDRESS = {
  city: "Lagos Mainland",
  state: "Lagos",
  country: "Nigeria",
};

export async function getCordsAddress(cordinates: string[]) {
  return DEFAULT_ADDRESS;
}

// Fetch an arry of hospitals from firebaset por
export  function fetchHospitals(address: LocationType): HospitalDb[] {

  const data: string = fs.readFileSync("src/lib/server/testData/hospital_db.json", "utf8");

  const hospitals: HospitalDb[] = JSON.parse(data);

  const hospitalsByState = hospitals.filter((hospital) => {
    return hospital.address.state === address.state;
  });

  const hospitalsByCity = hospitalsByState.filter((hospital) => {
    return hospital.address.city === address.city;
  });

  return hospitalsByCity ? hospitalsByCity : hospitalsByState;

}

export async function rankingHospitals(patientTs: PatientType, hospitals: HospitalDb[]) {
  return rankHospitals(hospitals, patientTs);
}

export async function getPatientTSObject(aiText: string) {

  try {

    const validData = JSON.parse(aiText);

    return isPatientType(validData) ? validData : null;
  }catch(error) {
    console.log("Error in getPatientTSObject", error);
    return null;
  }

}


export async function generatePatientObject(
  situation: string,
  maxRetries: number = 1,
): Promise<PatientType | null> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const aiTextResponse = await getAiResponse(situation);
    const patientTS = await getPatientTSObject(aiTextResponse);

    if (patientTS) {
      return patientTS; // Return the valid patient object
    }

    console.log(`Attempt ${attempt + 1} failed. Retrying...`);
  }

  console.log("Failed to generate valid PatientType object after retries."); // Throw an error if all attempts fail
  return null;
}

import { hospitals_testData } from "@/lib/server/testData";
import { getAiResponse } from "./aiResponse";
import {
  fetchHospitals,
  getCordsAddress,
  getPatientTSObject,
  rankHospitals,
} from "./hospital";

export async function getHospitals(sitaution: string, location: string[]) {
  //   const aiTextResonse = await getAiResponse(sitaution);

  const aiTextResonse = "";

  // structre the patient treatment and specialities object
  const patientTS = await getPatientTSObject(aiTextResonse);

  // given the longitude and latitude return the reverse geocoded address
  const patientAddress = await getCordsAddress(location);

  const fetchedHospitals = fetchHospitals(patientAddress);

  const rankedHospitals = rankHospitals(patientTS, fetchedHospitals);

  return hospitals_testData;
  //   return rankedHospitals;
}

/*

  Function: getHospitals

  1. Send situation_text to gemini to determine specialites and treatments needed. 
     -> {treamtments: ['',''], specialities: ['',''] }

  2. Send location to fetch hospitals function

  3. Send this to ranking function -> [{hospitalId,score, ...details},{hospitalId,score, ...details} ]

  4. return this list of hospitals to the client


  Function: fetchHospitals: args: location

  1. Using the mapbox geocoding api get the city,state from cordinate -> 

  2. Fetch the full list of hospitals from firebase in the same City if none, try again
     for hospitals in the same state -> [{hospitalid, specialities, treatments}]

  3  Return this list of hospitals in the city


  Function: Ranking using Algolia

  Function: Ranking using custom function, args: patient,hospitals
     
  1. process it and get the scores -> [{hospitalId, score}]

  2. Return this list sorted by scores in desencing order
  
  */

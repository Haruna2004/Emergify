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
export async function fetchHospitals(address: any) {
  return "List of hospital in the user city or state";
}

export async function rankHospitals(patient: any, hospitals: any) {
  return "List of ranked hospitals";
}
export async function getPatientTSObject(aiText: string) {
  return "a structure patient object";
}

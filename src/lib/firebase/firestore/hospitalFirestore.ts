import firebaseApp from "../config";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

async function addFirstoreData(finalData: any, collectionId: string) {
  const db = getFirestore(firebaseApp);

  try {
    const docRef = await addDoc(collection(db, collectionId), {
      ...finalData,
    });

    return { success: true, data: docRef.id };
  } catch (error) {
    console.log(error);
    return { success: false, error: error };
  }
}

async function fetchHospitals() {
  const db = getFirestore(firebaseApp);
  try {
    const hospitalRef = collection(db, "hospitals");
    const q = query(hospitalRef, where("address.city", "==", "Lagos Mainland"));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }

    const hospitals = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return hospitals;
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}

export { addFirstoreData, fetchHospitals };

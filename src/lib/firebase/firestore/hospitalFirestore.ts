import firebaseApp from "../config";

import { getFirestore, collection, addDoc } from "firebase/firestore";

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

export { addFirstoreData };

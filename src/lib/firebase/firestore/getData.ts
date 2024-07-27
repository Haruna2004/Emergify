import firebaseApp from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

// @ts-ignore
export default async function getDoument(collection, id) {
  let docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

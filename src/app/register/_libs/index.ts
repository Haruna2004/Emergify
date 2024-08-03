import { storage } from "@/lib/firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export async function handleImageUpload(
  file: any,
  toast: any,
  setImageUrl: any,
) {
  if (!file) {
    return toast({
      description: "You have not added the profile image",
      variant: "destructive",
      duration: 1000,
    });
  }

  const fileId = uuidv4();
  const storageRef = ref(storage, `images/${fileId}/${file.name}`);

  await uploadBytes(storageRef, file).then(async (snapshot) => {
    await getDownloadURL(snapshot.ref).then((downloadUrl) => {
      setImageUrl(downloadUrl);
    });
  });
}

"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import cn from "classnames";
import { addFirstoreData } from "@/lib/firebase/firestore/hospitalFirestore";
import { useToast } from "@/components/ui/use-toast";
import { handleImageUpload } from "../../_libs";
import { useRouter } from "next/navigation";
import { LoadingOutlined } from "@ant-design/icons";
import regMedicsForm, {
  useMedicsSpecsList,
  useMedicsTreatmentList,
} from "@/lib/store/regMedicsForm";

type Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const LAST_STEP = 4;
const FIRST_STEP = 1;

export default function MedicsNextButton({ step, setStep }: Props) {
  const router = useRouter();

  const {
    medicsName,
    profileImage,
    institution,
    experience,
    bio,
    address,
    contact,
    resetAllValue,
  } = regMedicsForm();

  const { getSelectedTreat, resetTreat } = useMedicsTreatmentList();
  const { getSelectedSpec, resetSpec } = useMedicsSpecsList();
  const { toast } = useToast();
  const [imageUrl, setImageUrl] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmitMedics() {
    setIsSending(true);

    await handleImageUpload(profileImage, toast, setImageUrl);

    if (!imageUrl) {
      setIsSending(false);
      return toast({
        description: "Could not upload image. Try again",
        variant: "destructive",
        duration: 1000,
      });
    }

    const medicsData = {
      medicsName,
      profileImage: imageUrl,
      experience,
      institution,
      bio,
      contact,
      address,
      treatments: getSelectedTreat(),
      specialities: getSelectedSpec(),
    };

    console.log(medicsData);

    //TODO: validate if empty or incorrect format in input

    const result = await addFirstoreData(medicsData, "medics");

    if (result.success) {
      setIsSending(false);

      toast({
        description: "You are have been Registered Successfully",
        variant: "default",
        duration: 1000,
      });

      //clear form
      resetAllValue();
      resetTreat();
      resetSpec();

      return router.push("/");
    }

    toast({
      description: "Something went wrong. Could not register",
      variant: "destructive",
      duration: 1000,
    });
  }

  return (
    <div className="mb-5 mt-10 flex w-full items-center justify-between">
      <button
        className={cn(
          "w-28 rounded-md bg-cyan-600/80 py-1.5 text-white",
          step === FIRST_STEP && "opacity-0",
        )}
        onClick={() => {
          if (step == 1) return;
          setStep((prev) => prev - 1);
        }}
      >
        Previous
      </button>
      <button
        className="w-28 rounded-md bg-cyan-700 py-1.5 text-white opacity-80 hover:opacity-100"
        onClick={() => {
          if (step === LAST_STEP) {
            if (isSending) return;
            handleSubmitMedics();
            return;
          }
          setStep((prev) => prev + 1);
        }}
      >
        {isSending && <LoadingOutlined />}

        {!isSending && <p>{step === LAST_STEP ? "Submit" : "Next"}</p>}
      </button>
    </div>
  );
}

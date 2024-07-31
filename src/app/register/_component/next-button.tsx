import React, { Dispatch, SetStateAction } from "react";
import cn from "classnames";
import regHospitalForm, {
  useSpecsList,
  useTreatmentList,
} from "@/lib/store/regHospitalForm";

type Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const LAST_STEP = 5;
const FIRST_STEP = 1;

export default function NextButton({ step, setStep }: Props) {
  const {
    hospitalName,
    coverImage,
    description,
    contact,
    address,
    googleMapLink,
  } = regHospitalForm();

  const { getSelectedTreat } = useTreatmentList();
  const { getSelectedSpec } = useSpecsList();

  async function handleSubmitHospital() {
    // get uploaded cover image url

    const finalValues = {
      hospitalName,
      coverImage,
      description,
      contact,
      address,
      googleMapLink,
      treatments: getSelectedTreat(),
      specialities: getSelectedSpec(),
    };

    console.log(finalValues);

    //validate if empty or incorrect format

    // Add to firebase firestore

    //confirm success
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
            handleSubmitHospital();
            return;
          }
          setStep((prev) => prev + 1);
        }}
      >
        {step === LAST_STEP ? "Submit" : "Next"}
      </button>
    </div>
  );
}

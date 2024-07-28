import React, { Dispatch, SetStateAction } from "react";
import cn from "classnames";

type Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

export default function NextButton({ step, setStep }: Props) {
  return (
    <div className="mb-5 mt-10 flex w-full items-center justify-between">
      <button
        className={cn(
          "w-28 rounded-md bg-cyan-600/80 py-1.5 text-white",
          step === 1 && "opacity-0",
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
          if (step === 3) return;
          setStep((prev) => prev + 1);
        }}
      >
        {step === 3 ? "Submit" : "Next"}
      </button>
    </div>
  );
}

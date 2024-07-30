"use client";
import { useState } from "react";
import HospitalDetailsForm from "../_component/hospital-details";
import HospitalContactForm from "../_component/hospital-contact";
import HospitalAddrForm from "../_component/hospital-address";
import NextButton from "../_component/next-button";
import HospitalTreatForm from "../_component/hospital-treat";
import HospitalSpecForm from "../_component/hospital-spec";

type Props = {};

function Page({}: Props) {
  const [step, setStep] = useState<number>(1);

  return (
    <main className="mx-auto max-w-4xl p-10">
      {step === 1 && <HospitalDetailsForm />}
      {step === 2 && <HospitalContactForm />}
      {step === 3 && <HospitalAddrForm />}
      {step === 4 && <HospitalSpecForm />}
      {step === 5 && <HospitalTreatForm />}

      <NextButton step={step} setStep={setStep} />
    </main>
  );
}

export default Page;

"use client";
import { useState } from "react";
import MedicsDetailsForm from "../_component/reg-medics/medics-details";
import MedicsNextButton from "../_component/reg-medics/medics-next-button";
import MedicsAddrContForm from "../_component/reg-medics/medics-addr-cont";
import MedicsSpecsForm from "../_component/reg-medics/medics-specs";
import MedicsTreatForm from "../_component/reg-medics/medics-treat";

type Props = {};

function Page({}: Props) {
  const [step, setStep] = useState<number>(1);
  return (
    <main className="mx-auto max-w-4xl p-10">
      {step === 1 && <MedicsDetailsForm />}
      {step === 2 && <MedicsAddrContForm />}
      {step === 3 && <MedicsSpecsForm />}
      {step === 4 && <MedicsTreatForm />}

      <MedicsNextButton step={step} setStep={setStep} />
    </main>
  );
}

export default Page;

import React from "react";
import FormSection from "../form-sec-container";
import MedicsSelectedSpecs from "./medics-selected-specs";
import MedicsSpecsSelectInput from "./medics-specs-selecte-input";

type Props = {};

export default function MedicsSpecsForm({}: Props) {
  return (
    <FormSection
      className="scrollbar-thin h-[90vh] overflow-y-auto border-2"
      title="Specialities"
      desc=""
    >
      {/* selected */}
      <div>
        <MedicsSelectedSpecs />
      </div>

      {/* list-all-select */}
      <div className="mt-5">
        <MedicsSpecsSelectInput />
      </div>
    </FormSection>
  );
}

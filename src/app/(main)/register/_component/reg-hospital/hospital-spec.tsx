import React from "react";
import FormSection from "../form-sec-container";
import SelectedSpecs from "./selected-specs";
import SpecsSelectInput from "./hospital-specs-input";

type Props = {};

export default function HospitalSpecForm({}: Props) {
  return (
    <FormSection
      className="scrollbar-thin h-[90vh] overflow-y-auto border-2"
      title="Specialities"
      desc=""
    >
      {/* selected */}
      <div>
        <SelectedSpecs />
      </div>

      {/* list-all-select */}
      <div className="mt-5">
        <SpecsSelectInput />
      </div>
    </FormSection>
  );
}

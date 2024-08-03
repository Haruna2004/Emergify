import React from "react";
import FormSection from "../form-sec-container";
import { useDebounce } from "@/lib/client/hooks/debounce";
import SearchInput from "./medics-search-input";
import MedicsTreatsAccordion from "./medics-treats-accordion";
import MedicsSearchResult from "./medics-search-result";
import MedicsSelectedTreats from "./medics-selected-treats";

type Props = {};

export default function MedicsTreatForm({}: Props) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const debouncedInputValue = useDebounce(inputValue, 300);

  return (
    <FormSection
      className="scrollbar-thin h-[90vh] overflow-y-auto border-2"
      title="Treatments"
      desc=""
    >
      {/* search */}
      <div className="relative">
        <SearchInput
          setInputValue={setInputValue}
          setOpen={setOpen}
          inputValue={inputValue}
        />
        {open && (
          <MedicsSearchResult debouncedInputValue={debouncedInputValue} />
        )}
      </div>

      {/* selected */}
      <div>
        <MedicsSelectedTreats />
      </div>

      {/* accordion treats input */}
      <div className="mt-5">
        <MedicsTreatsAccordion />
      </div>
    </FormSection>
  );
}

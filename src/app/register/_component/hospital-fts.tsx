import React from "react";
import FormSection from "./form-sec-container";
import { useDebounce } from "@/lib/client/hooks/debounce";
import SearchResult from "./search-result";
import SearchInput from "./search-input";
import InputAccordion from "./input-accordion";
import SelectedTreats from "./selected-treats";

type Props = {};

export default function HospitalFTSForm({}: Props) {
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
        {open && <SearchResult debouncedInputValue={debouncedInputValue} />}
      </div>

      {/* selected */}
      <div>
        <SelectedTreats />
      </div>

      {/* according */}
      <div className="mt-5">
        <InputAccordion />
      </div>
    </FormSection>
  );
}

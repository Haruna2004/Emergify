import React, { useMemo } from "react";
import FormSection from "./form-sec-container";
import { hospital_treatment } from "@/contants/hospital-fts";
import { useDebounce } from "@/lib/client/hooks/debounce";
import SearchResult from "./search-result";
import SearchInput from "./search-input";
import { getFilteredList } from "@/lib/utils";
import InputAccordion from "./input-accordion";
import SelectedTreats from "./selected-treats";

type Props = {};

export default function HospitalFTSForm({}: Props) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const debouncedInputValue = useDebounce(inputValue, 300);

  const handleValueChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
    setOpen(!!value);
  };

  const filteredList = useMemo(() => {
    return Array.isArray(hospital_treatment)
      ? getFilteredList(hospital_treatment, debouncedInputValue)
      : [];
  }, [debouncedInputValue]);

  return (
    <FormSection
      className="scrollbar-thin h-[90vh] overflow-y-auto border-2"
      title="Treatments"
      desc=""
    >
      {/* search */}
      <div className="relative">
        <SearchInput handleValueChange={handleValueChange} />
        {open && filteredList.length > 0 && (
          <SearchResult filteredList={filteredList} />
        )}
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

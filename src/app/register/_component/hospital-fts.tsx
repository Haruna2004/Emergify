import React, { useMemo } from "react";
import FormSection from "./form-sec-container";
import { hospital_treatment } from "@/contants/hospital-fts";
import { useDebounce } from "@/lib/client/hooks/debounce";
import SearchResult from "./search-result";
import SearchInput from "./search-input";
import { getFilteredList } from "@/lib/utils";
import { CloseOutlined } from "@ant-design/icons";
import InputAccordion from "./input-accordion";

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
      className="h-[90vh] overflow-y-auto border-2"
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
      <div className="mt-5 flex max-h-60 flex-wrap items-center justify-start gap-4 overflow-y-auto">
        {[
          "Angiography/ Angioplasty",
          "Beating Heart Surgery",
          "Heart Transplant",
          "Angiography/ Angioplasty",
          "Beating Heart Surgery",
          "Heart Transplant",
          "Angiography/ Angioplasty",
          "Beating Heart Surgery",
          "Heart Transplant",
          "Angiography/ Angioplasty",
          "Beating Heart Surgery",
          "Heart Transplant",
          "Angiography/ Angioplasty",
          "Beating Heart Surgery",
          "Heart Transplant",
          "Angiography/ Angioplasty",
          "Beating Heart Surgery",
          "Heart Transplant",
        ].map((value) => (
          <div
            key={value}
            className="flex items-center gap-3 rounded-full bg-cyan-600 p-1.5 px-3 text-sm font-medium text-white"
          >
            <p>{value}</p>
            <CloseOutlined className="cursor-pointer font-semibold" />
          </div>
        ))}
      </div>
      {/* list */}
      <div>
        <InputAccordion />
      </div>
    </FormSection>
  );
}

import { useTreatmentList } from "@/lib/store/regHospitalForm";
import { getFilteredList } from "@/lib/utils";
import { CheckOutlined } from "@ant-design/icons";
import React, { useMemo } from "react";

type Props = {
  debouncedInputValue: string;
};

export default function SearchResult({ debouncedInputValue }: Props) {
  const { availableTreatment, selectTreat } = useTreatmentList();

  const filteredList = useMemo(() => {
    return Array.isArray(availableTreatment)
      ? getFilteredList(availableTreatment, debouncedInputValue)
      : [];
  }, [debouncedInputValue, availableTreatment]);

  return (
    <>
      <div className="z-5 scrollbar-thin mt-2 max-h-48 overflow-y-scroll rounded-lg border p-3 text-sm shadow-md">
        {filteredList.map(({ category, treatments }) => (
          // command list
          <div key={category}>
            {treatments.length > 0 && (
              // command item
              <>
                <h3 className="font-medium text-cyan-800">{category}</h3>

                <div className="flex flex-col gap-1 py-1">
                  {treatments.map(({ title, value, selected }) => (
                    <div
                      key={value}
                      className="flex cursor-pointer items-center justify-between p-1"
                    >
                      <p className="text-cyan-700">{title}</p>
                      {selected && <CheckOutlined className="text-green-800" />}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          // command list end
        ))}
      </div>
    </>
  );
}

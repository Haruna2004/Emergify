import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { useMedicsTreatmentList } from "@/lib/store/regMedicsForm";

type Props = {};

export default function MedicsSelectedTreats({}: Props) {
  const { availableTreatment, selectTreat } = useMedicsTreatmentList();

  return (
    <div className="scrollbar-thin mt-5 flex max-h-60 flex-wrap items-center justify-start gap-4 overflow-y-auto">
      {availableTreatment.map(({ treatments }, categoryIndex) =>
        // selected
        treatments.map(({ value, title, selected }, treatIndex) => {
          return (
            selected && (
              <div
                key={value}
                className="flex items-center gap-3 rounded-full bg-cyan-600 p-1.5 px-3 text-sm font-medium text-white"
              >
                <p>{title}</p>
                <CloseOutlined
                  className="cursor-pointer font-semibold"
                  onClick={() => selectTreat(categoryIndex, treatIndex)}
                />
              </div>
            )
          );
        }),
      )}
    </div>
  );
}

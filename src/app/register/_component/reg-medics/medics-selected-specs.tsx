import { useMedicsSpecsList } from "@/lib/store/regMedicsForm";
import { CloseOutlined } from "@ant-design/icons";
import React from "react";

type Props = {};

export default function MedicsSelectedSpecs({}: Props) {
  const { availableSpecs, selectSpec } = useMedicsSpecsList();
  return (
    <div className="scrollbar-thin mt-5 flex max-h-60 flex-wrap items-center justify-start gap-4 overflow-y-auto">
      {availableSpecs.map(({ value, title, selected }, specIndex) => {
        return (
          selected && (
            <div
              key={value}
              className="flex items-center gap-3 rounded-full bg-cyan-600 p-1.5 px-3 text-sm font-medium text-white"
            >
              <p>{title}</p>
              <CloseOutlined
                className="cursor-pointer font-semibold"
                onClick={() => selectSpec(specIndex)}
              />
            </div>
          )
        );
      })}
    </div>
  );
}

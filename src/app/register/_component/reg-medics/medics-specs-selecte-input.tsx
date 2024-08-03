import { useMedicsSpecsList } from "@/lib/store/regMedicsForm";
import { CheckOutlined } from "@ant-design/icons";
import React from "react";

type Props = {};

export default function MedicsSpecsSelectInput({}: Props) {
  const { availableSpecs, selectSpec } = useMedicsSpecsList();
  return (
    <div className="w-full flex-col">
      {availableSpecs.map(({ value, title, selected }, specIndex) => (
        <div
          key={value}
          className="cursor-pointer"
          onClick={() => selectSpec(specIndex)}
        >
          <div className="flex items-center justify-between">
            <p className="text-cyan-800">{title}</p>
            {selected && <CheckOutlined className="text-green-800" />}
          </div>

          <hr className="my-2" />
        </div>
      ))}
    </div>
  );
}

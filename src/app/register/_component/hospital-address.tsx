import React from "react";
import FormSection from "./form-sec-container";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import regHospitalForm from "@/lib/store/regHospitalForm";

type Props = {};

const address_fields = [
  { label: "Address Street", id: "phone1" },
  { label: "Address Street", id: "phone1" },
  { label: "Address Street", id: "phone1" },
];

export default function HospitalAddrForm({}: Props) {
  const { changeValue, address } = regHospitalForm();

  const handleChange = (e: any) => {
    const newAddress = { ...address, [e.target.name]: e.target.value };
    changeValue("address", newAddress);
  };

  return (
    <FormSection title="Hospital Location" desc="">
      <div className="grid gap-7">
        {address_fields.map(({ label, id }) => (
          <div className="grid gap-5" key={id}>
            <Label htmlFor="hospitalName" className="text-cyan-700">
              {label}
            </Label>
            <Input
              id={id}
              name={id}
              type="text"
              className="w-full"
              //@ts-ignore
              value={contact[id]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </FormSection>
  );
}

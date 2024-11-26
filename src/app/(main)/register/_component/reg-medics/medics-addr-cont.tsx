import React from "react";
import FormSection from "../form-sec-container";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import regMedicsForm from "@/lib/store/regMedicsForm";

type Props = {};

const address_fields = [
  { label: "City", id: "city" },
  { label: "State", id: "state" },
  { label: "Country", id: "country" },
];

const contact_fields = [
  { label: "Email Address", id: "emailAddress" },
  { label: "Phone Number", id: "phoneNumber" },
];

export default function MedicsAddrContForm({}: Props) {
  const { changeValue, address, contact } = regMedicsForm();

  const handleAddrChange = (e: any) => {
    const newAddress = { ...address, [e.target.name]: e.target.value };
    changeValue("address", newAddress);
  };
  const handleContChange = (e: any) => {
    const newContact = { ...contact, [e.target.name]: e.target.value };
    changeValue("contact", newContact);
  };

  return (
    <FormSection title="Contact Address" desc="">
      <div className="grid gap-7">
        {contact_fields.map(({ label, id }) => (
          <div className="grid gap-5" key={id}>
            <Label htmlFor={id} className="text-cyan-700">
              {label}
            </Label>
            <Input
              id={id}
              name={id}
              type="text"
              className="w-full"
              //@ts-ignore
              value={contact[id]}
              onChange={handleContChange}
            />
          </div>
        ))}

        {address_fields.map(({ label, id }) => (
          <div className="grid gap-5" key={id}>
            <Label htmlFor={id} className="text-cyan-700">
              {label}
            </Label>
            <Input
              id={id}
              name={id}
              type="text"
              className="w-full"
              //@ts-ignore
              value={address[id]}
              onChange={handleAddrChange}
            />
          </div>
        ))}
      </div>
    </FormSection>
  );
}

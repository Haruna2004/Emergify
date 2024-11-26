import React from "react";
import FormSection from "../form-sec-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import regHospitalForm from "@/lib/store/regHospitalForm";

type Props = {};

const contact_fields = [
  { label: "Phone Number", id: "phone1" },
  { label: "Phone Number 2", id: "phone2" },
  { label: "Email Address", id: "emailAddress" },
];

export default function HospitalContactForm({}: Props) {
  const { changeValue, contact } = regHospitalForm();

  const handleChange = (e: any) => {
    const newContact = { ...contact, [e.target.name]: e.target.value };
    changeValue("contact", newContact);
  };

  return (
    <FormSection title="Hospital Contact" desc="">
      <div className="grid gap-7">
        {contact_fields.map(({ label, id }) => (
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

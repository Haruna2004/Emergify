import React from "react";
import FormSection from "../form-sec-container";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import regHospitalForm from "@/lib/store/regHospitalForm";
import Link from "next/link";

type Props = {};

const address_fields = [
  { label: "Address Line", id: "street" },
  { label: "City", id: "city" },
  { label: "State", id: "state" },
  { label: "Country", id: "country" },
];

export default function HospitalAddrForm({}: Props) {
  const { changeValue, address, googleMapLink } = regHospitalForm();

  const handleChange = (e: any) => {
    const newAddress = { ...address, [e.target.name]: e.target.value };
    changeValue("address", newAddress);
  };

  return (
    <FormSection title="Hospital Location" desc="">
      <div className="grid gap-7">
        {/* google maps - link */}
        <div className="grid gap-5">
          <Label htmlFor="hospitalName" className="text-cyan-700">
            Google Maps
          </Label>
          <div className="flex w-full items-center gap-3">
            <Input
              type="text"
              className="w-full"
              value={googleMapLink}
              onChange={(e) => changeValue("googleMapLink", e.target.value)}
            />
            <button className="h-[90%] rounded-md bg-cyan-800 px-3 text-sm text-white">
              Confirm
            </button>
          </div>
          <Link
            className="f -mt-2 pl-2 text-xs text-blue-800"
            href="https://youtu.be/fGWDogeZMTY?si=8mM2arSZnAEiKj3G"
            target="_blank"
          >
            Learn how to get the link↗
          </Link>
        </div>
        {/*  */}

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
              value={address[id]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </FormSection>
  );
}

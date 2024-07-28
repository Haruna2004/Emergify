import React from "react";
import FormSection from "./form-sec-container";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import regHospitalForm from "@/lib/store/regHospitalForm";
import { hospital_1 } from "../../../../public/assets";
import Image from "next/image";
import { UploadCloud } from "lucide-react";

type Props = {};

export default function HospitalDetailsForm({}: Props) {
  const { changeValue, hospitalName, description } = regHospitalForm();

  const handleChange = (e: any) => {
    changeValue(e.target.id, e.target.value);
  };
  return (
    <FormSection title="Hospital Details" desc="">
      <div className="grid gap-7">
        <div className="grid gap-5">
          <Label htmlFor="hospitalName" className="text-cyan-700">
            Name
          </Label>
          <Input
            id="hospitalName"
            type="text"
            className="w-full"
            value={hospitalName}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-5">
          <Label htmlFor="description" className="text-cyan-700">
            Description
          </Label>
          <Textarea
            id="description"
            onChange={handleChange}
            value={description}
            className="min-h-20"
          />
        </div>
        <div className="grid gap-5">
          <Label htmlFor="description" className="text-cyan-700">
            Cover Image
          </Label>
          <div className="flex w-full items-center justify-center">
            {"" ? (
              <Image
                src={hospital_1}
                alt="image"
                className="cursor-pointer rounded-md object-cover"
              />
            ) : (
              //file input
              <div className="flex h-40 w-full flex-col items-center justify-center rounded-md bg-gray-100">
                <UploadCloud />
                <p>upload Photo</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </FormSection>
  );
}

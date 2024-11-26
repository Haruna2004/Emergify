/* eslint-disable @next/next/no-img-element */
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import FormSection from "../form-sec-container";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import regHospitalForm from "@/lib/store/regHospitalForm";
import { UploadCloud, X } from "lucide-react";

type Props = {};

export default function HospitalDetailsForm({}: Props) {
  const { changeValue, hospitalName, description, coverImage } =
    regHospitalForm();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const fileref = useRef(null);

  const handleChange = (e: any) => {
    changeValue(e.target.id, e.target.value);
  };

  useEffect(() => {
    if (coverImage) {
      const objectUrl = URL.createObjectURL(coverImage);
      setPreviewImage(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [coverImage]);

  const changeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      changeValue("coverImage", file);
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        alert("File is too large (Max Size 5MB)");
        return;
      }
      const objecUrl = URL.createObjectURL(file);
      setPreviewImage(objecUrl);
    }
  };

  const removeImage = () => {
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
      setPreviewImage(null);
      changeValue("coverImage", null);
    }
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
        {/* image upload */}
        <div className="grid gap-5">
          <Label htmlFor="description" className="text-cyan-700">
            Cover Image
          </Label>
          <div className="flex w-full items-center justify-center">
            {previewImage ? (
              <div className="relative h-56 w-full rounded-md border-2">
                {/* Unoptimized Image */}
                <img
                  src={previewImage}
                  alt="image"
                  className="h-full w-full cursor-pointer rounded-md object-cover"
                />
                <X
                  className="absolute right-5 top-5 text-red-600"
                  onClick={removeImage}
                />
              </div>
            ) : (
              //file input
              <div
                className="flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-md bg-gray-100"
                //@ts-ignore
                onClick={() => fileref.current.click()}
              >
                <UploadCloud />
                <input
                  ref={fileref}
                  type="file"
                  accept="image/*"
                  onChange={changeImage}
                  className="hidden"
                  aria-label="Upload Photo"
                />
                <p>upload Photo</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </FormSection>
  );
}

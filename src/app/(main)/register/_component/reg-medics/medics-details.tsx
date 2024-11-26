/* eslint-disable @next/next/no-img-element */
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import FormSection from "../form-sec-container";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadCloud, X } from "lucide-react";
import regMedicsForm from "@/lib/store/regMedicsForm";

type Props = {};

export default function MedicsDetailsForm({}: Props) {
  const {
    medicsName,
    experience,
    institution,
    bio,
    profileImage,
    changeValue,
  } = regMedicsForm();

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const fileref = useRef(null);

  const handleChange = (e: any) => {
    changeValue(e.target.id, e.target.value);
  };

  useEffect(() => {
    if (profileImage) {
      const objectUrl = URL.createObjectURL(profileImage);
      setPreviewImage(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [profileImage]);

  const changeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      changeValue("profileImage", file);
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
      changeValue("profileImage", null);
    }
  };

  return (
    <FormSection title="Personal Info" desc="">
      <div className="grid gap-7">
        <div className="grid gap-5">
          <Label htmlFor="medicsName" className="text-cyan-700">
            Name
          </Label>
          <Input
            id="medicsName"
            type="text"
            className="w-full"
            value={medicsName}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-5">
          <Label htmlFor="bio" className="text-cyan-700">
            Your Bio
          </Label>
          <Textarea
            id="bio"
            onChange={handleChange}
            value={bio}
            className="min-h-20"
          />
        </div>

        <div className="grid gap-5">
          <Label htmlFor="institution" className="text-cyan-700">
            Medical Institution
          </Label>
          <Input
            id="institution"
            type="text"
            className="w-full"
            value={institution}
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-5">
          <Label htmlFor="experience" className="text-cyan-700">
            Experience
          </Label>
          <Input
            id="experience"
            type="number"
            className="w-full"
            value={experience}
            onChange={handleChange}
          />
        </div>
        {/* image upload */}
        <div className="grid gap-5">
          <Label htmlFor="description" className="text-cyan-700">
            Profile Image
          </Label>
          <div className="flex w-full items-center justify-center">
            {previewImage ? (
              <div className="relative h-56 w-56 rounded-md border-2">
                {/* Unoptimized Image */}
                <img
                  src={previewImage}
                  alt="image"
                  className="h-full w-full cursor-pointer rounded-md object-cover"
                />
                <X
                  className="absolute right-3 top-3 cursor-pointer rounded-full p-0.5 text-xl text-red-600 hover:bg-gray-200 hover:text-red-500"
                  onClick={removeImage}
                />
              </div>
            ) : (
              //file input
              <div
                className="flex h-48 w-48 cursor-pointer flex-col items-center justify-center rounded-md bg-gray-100"
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

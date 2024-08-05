"use client";
import { ImagePlusIcon, SendHorizonal } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import HospitalMap from "./hospital-map";
import useHospitalStore, { useHospitalList } from "@/lib/store/useHospital";
import axios from "axios";
import { useToast } from "../ui/use-toast";

type Props = {};

// bg-[#03aed2]/80

export default function HospitalHome({}: Props) {
  const router = useRouter();
  const { toast } = useToast();
  const { situationText, mapLocation, updateSituation } = useHospitalStore();
  const { updateHospitalsList } = useHospitalList();
  const [isProccesing, setProcessing] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      console.log(situationText, mapLocation);
      setProcessing(true);

      // handle processing the request
      const result = await axios.post("/api/v1/locate-hospital", {
        situation: situationText,
        location: mapLocation,
      });

      const { data, status, message } = result.data;

      if (status !== 200) {
        setProcessing(false);
        return toast({
          description: "Failed to Locate Hospitals. Try again",
          duration: 1000,
          variant: "destructive",
        });
      }

      // request was successfull
      updateHospitalsList(data);
      setProcessing(false);
      updateSituation("");
      router.push("/hospital/list-all");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="h-[50%] bg-gray-200 md:h-full">
        <HospitalMap />{" "}
      </div>

      <div className="mx-auto mt-5 flex w-full flex-col items-center gap-7 p-5 md:absolute md:top-20 md:mx-auto">
        <h1 className="text-center font-mono text-xl text-cyan-700 md:rounded-sm md:bg-white/40 md:p-2 md:text-cyan-800">
          Describe your situation
        </h1>

        {/* input-area */}
        <div className="relative flex w-full flex-col gap-3 rounded-md border bg-white focus-within:bg-white/70 md:max-w-4xl md:bg-white/50">
          <TextareaAutosize
            className="w-full resize-none p-5 text-base text-cyan-900 outline-none md:bg-transparent"
            placeholder="E.g He got hit . . ."
            value={situationText}
            onChange={(e) => updateSituation(e.target.value)}
          />

          <div className="flex items-center justify-end gap-2 p-2 pb-2 pr-3 text-cyan-800">
            <ImagePlusIcon className="-mr-1 h-10 w-10 scale-75 cursor-pointer opacity-60" />
            <SendHorizonal
              className="h-12 w-12 scale-75 cursor-pointer rounded-full bg-cyan-800 p-2 text-white"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

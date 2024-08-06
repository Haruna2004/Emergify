"use client";
import { ImagePlusIcon, SendHorizonal } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import HospitalMap from "./hospital-map";
import useHospitalStore, { useHospitalList } from "@/lib/store/useHospital";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import Image from "next/image";
import { app_logo } from "../../../public/assets";
import cn from "classnames";
import { sleep } from "@/lib/utils";

type Props = {};

export default function HospitalHome({}: Props) {
  const router = useRouter();
  const { toast } = useToast();
  const { situationText, mapLocation, updateSituation } = useHospitalStore();
  const { updateHospitalsList } = useHospitalList();
  const [isProccesing, setProcessing] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      if (!situationText) {
        return toast({
          description: "Situation Input is empty",
          duration: 1000,
          variant: "destructive",
        });
      }
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

      // await sleep(3000);

      // request was successfull
      updateHospitalsList(data);
      updateSituation("");
      router.push("/hospital/list-all");
      return setProcessing(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="h-[50%] flex-1 bg-gray-200 md:h-full">
        <HospitalMap />{" "}
      </div>

      {/* loading */}
      <div
        className={cn(
          "absolute top-0 z-20 flex h-full w-full items-center justify-center bg-white p-10",
          !isProccesing && "hidden",
        )}
      >
        <div className="-mt-28 flex flex-col items-center gap-3 text-xl">
          <Image
            src={app_logo}
            alt="app log"
            className="h-14 w-14 animate-pulse duration-1000"
          />
          <p className="text-center leading-relaxed tracking-wider text-cyan-500">
            Please Hold on. Emergify is locating the best hospital around you.
          </p>
        </div>
      </div>

      <div className="mx-auto flex h-fit w-full flex-col items-center gap-7 p-5 md:absolute md:top-20 md:mx-auto">
        <SituationInput
          situationText={situationText}
          updateSituation={updateSituation}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

type SituationProps = {
  situationText: string;
  updateSituation: any;
  handleSubmit: any;
};

function SituationInput({
  situationText,
  updateSituation,
  handleSubmit,
}: SituationProps) {
  const [imageInput, setImageInput] = useState<any>(null);
  return (
    <>
      <h1 className="text-center font-mono text-xl text-cyan-700 md:rounded-sm md:bg-white/40 md:p-2 md:text-cyan-800">
        Describe your situation
      </h1>

      {/* input-area */}
      <div className="relative flex w-full flex-col gap-3 rounded-md border bg-white focus-within:bg-white/70 md:max-w-4xl md:bg-white/50">
        <TextareaAutosize
          className="w-full resize-none p-5 text-base text-cyan-900 outline-none md:bg-transparent"
          placeholder="E.g He got hit . . ."
          value={situationText}
          autoFocus={true}
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
    </>
  );
}

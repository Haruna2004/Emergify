"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import HospitalMap from "./hospital-map";
import useHospitalStore, { useHospitalList } from "@/lib/store/useHospital";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import Image from "next/image";
import { app_logo } from "../../../public/assets";
import cn from "classnames";
import { sleep } from "@/lib/utils";
import SituationInput from "./situation-input";
import { fetchHospitals } from "@/lib/firebase/firestore/hospitalFirestore";

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

      const fetchedHospitals = await fetchHospitals();

      // handle processing the request
      const result = await axios.post("/api/v1/locate-hospital", {
        situation: situationText,
        hospitals: fetchedHospitals,
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
      updateSituation("");
      router.push("/hospital/list-all");
      return setProcessing(false);
    } catch (error) {
      setProcessing(false);

      return toast({
        description: "Failed to Locate Hospitals. Try again",
        duration: 1000,
        variant: "destructive",
      });
      console.log(error);
      setProcessing(false);

      return toast({
        description: "Failed to Locate Hospitals. Try again",
        duration: 1000,
        variant: "destructive",
      });
    }
  };
  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="h-[50%] flex-1 bg-gray-200 md:h-full">
        <HospitalMap />{" "}
      </div>

      <RequestLoading
        isProcessing={isProccesing}
        text="Please Hold on. Emergify is locating the best hospital around you."
      />

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

function RequestLoading({
  isProcessing,
  text,
}: {
  isProcessing: boolean;
  text: string;
}) {
  return (
    <div
      className={cn(
        "absolute top-0 z-20 flex h-full w-full items-center justify-center bg-white p-10",
        !isProcessing && "hidden",
      )}
    >
      <div className="-mt-28 flex flex-col items-center gap-3 text-xl">
        <Image
          src={app_logo}
          alt="app log"
          className="h-14 w-14 animate-pulse duration-1000"
        />
        <p className="text-center leading-relaxed tracking-wider text-cyan-500">
          {text}
        </p>
      </div>
    </div>
  );
}

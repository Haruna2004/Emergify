"use client";
import cn from "classnames";
import SituationInput from "@/components/hospital/situation-input";
import Image from "next/image";
import React, { useState } from "react";
import { app_logo } from "../../../../public/assets";
import { SitExamples } from "@/contants/indext";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import useMedics from "@/lib/store/useMedics";
import { useRouter } from "next/navigation";
import { sleep } from "@/lib/utils";

type Props = {};

export default function Page({}: Props) {
  const [situationText, setSituationText] = useState<string>("");
  const [expText, setExpText] = useState<string | null>(null);
  const [isProcessing, setProcessing] = useState(false);
  const { toast } = useToast();
  const { addMedics } = useMedics();

  const router = useRouter();

  async function handleSubmit() {
    try {
      setProcessing(true);

      // handle processing the request
      const result = await axios.post("/api/v1/request-medical", {
        situation: situationText,
      });

      const { data, status } = result.data;

      if (status !== 200 || !data) {
        setProcessing(false);
        return toast({
          description: "Could not process request. Please try again",
          duration: 1000,
          variant: "destructive",
        });
      }

      await sleep(4000);

      console.log(data);
      setSituationText("");
      addMedics(data);
      router.push(`/medics/profile`);
      return setProcessing(false);
    } catch (error) {
      setProcessing(false);
      console.log(error);
      return toast({
        description: "An error occured. Please try again",
        duration: 1000,
        variant: "destructive",
      });
    }
  }

  return (
    <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center p-5 pt-10 sm:p-10 md:pt-20">
      <RequestLoading
        isProcessing={isProcessing}
        text="Please Hold on. Emergify is getting a medical proffesional to help."
      />

      <div className="w-full space-y-5">
        <SituationInput
          headerStyles="text-2xl"
          situationText={situationText}
          updateSituation={setSituationText}
          handleSubmit={handleSubmit}
        />
      </div>

      {/* examples */}
      <div className="mt-5 w-full space-y-3">
        {SitExamples.map(({ text, desc, emoji }) => (
          <div key={text} className="">
            <div
              className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-md border p-1 text-cyan-800"
              onClick={() =>
                setExpText((prev) => (prev === text ? null : text))
              }
            >
              <p className="rounded-md bg-gray-100 p-1">{emoji}</p>
              <p>{text}</p>
            </div>
            {text === expText && (
              <div className="mt-2 rounded-md border p-2 text-sm">{desc}</div>
            )}
          </div>
        ))}
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
        "absolute top-0 z-20 flex h-full w-full flex-col items-center justify-center bg-white p-10",
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
      <button className="mt-20 w-52 rounded-md bg-rose-600 p-2 px-4 text-sm text-white">
        Cancel Request
      </button>
    </div>
  );
}

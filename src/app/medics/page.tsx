"use client";
import cn from "classnames";
import SituationInput from "@/components/hospital/situation-input";
import Image from "next/image";
import React, { useState } from "react";
import { app_logo } from "../../../public/assets";

type Props = {};

export default function Page({}: Props) {
  const [situationText, setSituationText] = useState<string>("");
  const [expText, setExpText] = useState<number | null>(null);
  const [isProcessing, setProcessing] = useState(false);

  async function handleSubmit() {}

  return (
    <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center p-5 pt-10 sm:p-10 md:pt-20">
      <RequestLoading
        isProcessing={isProcessing}
        text="Please Hold on. Emergify is locating the best hospital around you."
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
        {[0, 1, 3].map((index) => (
          <div key={index} className="">
            <div
              className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-md border p-1 text-cyan-800"
              onClick={() =>
                setExpText((prev) => (prev === index ? null : index))
              }
            >
              <p className="rounded-md bg-gray-100 p-1">🔍</p>
              <p>A car incident along the way</p>
            </div>
            {index === expText && (
              <div className="mt-2 rounded-md border p-2 text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                repellendus exercitationem animi velit explicabo praesentium
                facilis reiciendis quas? Eveniet, magnam.
              </div>
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

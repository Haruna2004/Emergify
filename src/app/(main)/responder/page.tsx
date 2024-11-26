"use client";
import Map from "@/components/driver/base-map";
import Image from "next/image";
import React from "react";
import { driver_image } from "../../../../public/assets";
import MapboxExample from "@/components/driver/search-map";

type Props = {};

export default function LocateDriver({}: Props) {
  return (
    <div className="relative">
      {/* <Map /> */}
      {/* <SearchMap /> */}
      <MapboxExample />
      <div className="absolute bottom-20 left-0 right-0 mx-auto flex w-[80%] max-w-2xl flex-col items-center justify-center gap-5 rounded-md bg-white/80 p-5 sm:w-[50%] sm:p-3">
        {/* details */}
        <div className="flex flex-row gap-2">
          {/* <div className="h-10 w-10 rounded-full bg-black/20" /> */}
          <Image
            className="h-10 w-10 rounded-full object-cover"
            alt="d"
            src={driver_image}
          />
          <div className="text-sm">
            <h1>Ali Johnson</h1>
            <p className="font-semibold">1st Responder (5 min away)</p>
          </div>
        </div>
        {/* actions */}
        <div className="flex w-full items-center justify-around gap-3">
          <button className="rounded-lg bg-cyan-600 p-2 px-10 text-white">
            Call
          </button>
          <button className="rounded-lg bg-red-600 p-2 px-7 text-white">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

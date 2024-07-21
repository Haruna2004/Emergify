"use client";
import { ArrowRightCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function HospitalHome({}: Props) {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/hospital/list-all");
  };
  return (
    <div className="">
      {/* input */}

      <div className="w-full rounded-sm bg-[#03aed2]/80 p-10">
        <div className="flex w-full rounded-md bg-white p-2">
          <input
            type="text"
            placeholder="Select your current Address"
            className="flex-1 bg-transparent outline-none"
          />
          <ArrowRightCircleIcon />
        </div>

        {/* location display */}
        <p className="mt-5 text-xl font-semibold text-white">
          Your Location: <span className="">12, ola Street, Sholanke Road</span>
        </p>
      </div>

      {/* textarea - details of in */}

      <div className="flex w-full flex-col gap-3 p-5">
        <label htmlFor="situation" className="font-medium">
          Describe details of the Emergency
        </label>
        <textarea
          name="situation"
          className="w-full rounded-md border border-black p-4 outline-none"
          id=""
          rows={5}
        ></textarea>
      </div>

      {/* locate-button */}
      <div className="mt-10 flex w-full items-center justify-center p-5">
        <button
          className="w-[90%] rounded-lg bg-[#03aed2] py-3 text-white md:w-1/3"
          onClick={handleSubmit}
        >
          Locate Hospital
        </button>
      </div>
    </div>
  );
}

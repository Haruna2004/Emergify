import Image from "next/image";
import React from "react";
import cn from "classnames";

import { EnvironmentFilled, StarFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { HospitalType } from "@/lib/types";
import { useHospitalList } from "@/lib/store/useHospital";
import { getAddress } from "./hospital-profile";

type Props = {
  hospitalInfo: HospitalType;
};

export default function HospitalCard({ hospitalInfo }: Props) {
  const { selectHospital } = useHospitalList();
  const router = useRouter();
  const { id, coverImage, hospitalName, address, open, distance, score } =
    hospitalInfo;
  return (
    <div
      onClick={() => {
        selectHospital(hospitalInfo);
        router.push(`/hospital/profile`);
      }}
      className="relative flex h-48 w-full cursor-pointer items-center gap-3 rounded-md border"
    >
      <Image
        src={coverImage}
        alt={hospitalName}
        width={100}
        height={100}
        className="h-full w-full rounded-md object-cover"
      />
      <div className="absolute bottom-0 left-0 h-[50%] w-full rounded-b-md bg-black/40 p-2 text-white">
        <h1 className="font-semibold">{hospitalName}</h1>
        <p className="text-sm">{getAddress(address)}</p>
        {/* others */}
        <OtherDetails open={open} distance={distance} match={score} />
      </div>
    </div>
  );
}

export function OtherDetails({ open, distance, match }: any) {
  let greenColor = "text-green-500 bg-green-500";
  return (
    <div className="mt-1 flex w-full justify-around">
      {/* open */}
      <div className={cn("flex items-center gap-2", open && "text-green-500")}>
        <div
          className={cn(
            "h-3 w-3 animate-pulse rounded-full bg-green-500",
            !open && "bg-white",
          )}
        ></div>
        <p className="">{open ? "Open" : "Closed"}</p>
      </div>
      {/* rating */}
      <div className="flex items-center gap-2 text-amber-400">
        {/* TODO: Make dynamic */}
        <p>Match {match || "--"}</p>
      </div>
      {/* distance */}
      <div className="flex items-center gap-2 text-cyan-800">
        <EnvironmentFilled className="" />
        <p>{distance} Km</p>
      </div>
    </div>
  );
}

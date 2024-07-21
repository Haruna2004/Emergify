import Image from "next/image";
import React from "react";
import cn from "classnames";

import { EnvironmentFilled, StarFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";

type Props = {
  hospitalInfo: any;
};

export default function HospitalCard({ hospitalInfo }: Props) {
  const router = useRouter();
  const { id, image, name, address, open, distance, rating, number_of_rating } =
    hospitalInfo;
  return (
    <div
      onClick={() => router.push(`/hospital/profile/${id}`)}
      className="relative flex h-48 w-full cursor-pointer items-center gap-3 rounded-md border"
    >
      <Image
        src={image}
        alt={name}
        className="h-full w-full rounded-md object-cover"
      />
      <div className="absolute bottom-0 left-0 h-[50%] w-full rounded-b-md bg-black/40 p-2 text-white">
        <h1 className="font-semibold">{name}</h1>
        <p className="text-sm">{address}</p>
        {/* others */}
        <OtherDetails
          open={open}
          distance={distance}
          rating={rating}
          number_of_rating={number_of_rating}
        />
      </div>
    </div>
  );
}

export function OtherDetails({
  open,
  distance,
  rating,
  number_of_rating,
}: any) {
  let greenColor = "text-green-500 bg-green-500";
  return (
    <div className="mt-1 flex w-full justify-around">
      {/* open */}
      <div className={cn("flex items-center gap-2", open && "text-green-500")}>
        <div
          className={cn(
            "h-3 w-3 rounded-full bg-white",
            open && "animate-pulse bg-green-500",
          )}
        />
        <p className="">{open ? "Open" : "Closed"}</p>
      </div>
      {/* rating */}
      <div className="flex items-center gap-2">
        <StarFilled className="text-amber-400" />
        <p>
          {rating} ({number_of_rating})
        </p>
      </div>
      {/* distance */}
      <div className="flex items-center gap-2">
        <EnvironmentFilled className="" />
        <p>{distance} KM</p>
      </div>
    </div>
  );
}

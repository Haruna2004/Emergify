"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { OtherDetails } from "@/components/hospital/hospital-card";
import { useHospitalList } from "@/lib/store/useHospital";
import { google_map_icon, phone_icon } from "../../../public/assets";
import Link from "next/link";
import ReadMore from "../global/read-more";

type Props = {};

export function getAddress(address: any) {
  const { city, state, street, country } = address;
  return `${street}, ${city}, ${state}.`;
}

export default function HospitalProfile({}: Props) {
  // const { hospitalId } = useParams();
  const [action, setAction] = useState("address");
  const router = useRouter();
  const { selectedHospital } = useHospitalList();

  if (!selectedHospital) {
    router.push("/hospital");
    return <div>loading...</div>;
  }

  const {
    id,
    coverImage,
    hospitalName,
    address,
    open,
    distance,
    description,
    contact: { phone1, phone2, emailAddress },
    googleMapLink,
    score,
  } = selectedHospital;

  return (
    <div className="">
      {/* back */}
      <div
        className="flex w-fit cursor-pointer items-center gap-2 px-5 py-3 text-sm font-medium text-cyan-800"
        onClick={() => router.back()}
      >
        <ArrowLeftOutlined />

        <p>Back</p>
      </div>

      <div className="h-52 w-full">
        <Image
          src={coverImage}
          width={100}
          height={100}
          alt="image"
          className="h-[100%] w-full object-cover"
        />
      </div>

      {/* details */}
      <div className="space-y-1 p-5">
        <h1 className="text-xl font-semibold tracking-wider text-cyan-800">
          {hospitalName}
        </h1>
        <ReadMore
          className="text-cyan-900"
          content={
            description ||
            "Provides medical services, treatments and care, ensuring optimal health and well-being for patients"
          }
        />
      </div>

      {/* other-info */}
      <div className="flex w-full items-center justify-center p-2 pr-4">
        <OtherDetails open={open} distance={distance} match={score} />
      </div>

      <div className="flex items-center"></div>

      <div className="mt-3 flex w-full flex-col items-center gap-5">
        <div className="flex w-full justify-center gap-10">
          <Image
            src={google_map_icon}
            alt="map"
            className={cn(
              "h-14 w-14 cursor-pointer rounded-full border transition-colors duration-150",
              action === "address" && "border-cyan-700",
            )}
            onClick={() => setAction("address")}
          />
          <Image
            src={phone_icon}
            alt="map"
            className={cn(
              "h-14 w-14 cursor-pointer rounded-full border p-2 transition-colors duration-150",
              action === "phone" && "border-cyan-700",
            )}
            onClick={() => setAction("phone")}
          />
        </div>

        {/* cards */}

        {action === "phone" && (
          <div className="flex w-[90%] flex-col items-center space-y-4 rounded-md border-2 p-3 py-5">
            <p className="text-center text-cyan-900">
              Phone:{" "}
              <span className="font-medium">{phone1 || phone2 || "--"}</span>
            </p>

            <Link
              href={`tel:${phone1 || "+234"}`}
              className="w-[50%] rounded-md bg-cyan-700 py-3 text-center text-sm text-white"
            >
              Call Hospital
            </Link>
          </div>
        )}

        {action === "address" && (
          <div className="flex w-[90%] flex-col items-center space-y-4 rounded-md border-2 p-3 py-5">
            <p className="text-center text-cyan-900">
              Address:{" "}
              <span className="font-medium">{getAddress(address)}</span>
            </p>

            <Link
              href={`${googleMapLink || "#"}`}
              target="_blank"
              className="w-[50%] rounded-md bg-cyan-700 py-3 text-center text-sm text-white"
            >
              Open in Google Maps
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

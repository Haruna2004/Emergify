"use client";
export const runtime = "edge";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { hostpital_list } from "../../_test/demo-data";
import Image from "next/image";
import { google_map_icon, phone_icon } from "../../../../../public/assets";
import cn from "classnames";
import { ArrowLeftOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { OtherDetails } from "@/components/hospital/hospital-card";

type Props = {};

export default function HospitalProfile({}: Props) {
  const { hospitalId } = useParams();
  const [info, setInfo] = useState<any>({});
  const [action, setAction] = useState("address");
  const router = useRouter();

  useEffect(() => {
    let hospitalInfo = hostpital_list.find((item) => item.id === hospitalId);
    setInfo(hospitalInfo);
  }, [hospitalId]);

  if (!info) return <div>loading...</div>;

  const { id, image, name, address, open, distance, rating, number_of_rating } =
    info;

  return (
    <div className="">
      {/* cover */}

      {/* back */}
      <div
        className="flex items-center gap-2 px-5 py-3 font-medium text-black/80"
        onClick={() => router.back()}
      >
        <ArrowLeftOutlined />

        <p>Back</p>
      </div>

      <div className="h-52 w-full">
        <Image
          src={image}
          alt="image"
          className="h-[100%] w-full object-cover"
        />
      </div>

      {/* details */}
      <div className="space-y-1 p-5">
        <h1 className="text-xl font-semibold tracking-wider">{name}</h1>
        <p className="text-sm">
          Provides comprehensive medical services, cutting-edge treatments, and
          compassionate care, ensuring optimal health and well-being for all
          patient.
        </p>
      </div>

      {/* other-info */}
      <div className="flex w-full items-center justify-center p-2 pr-4">
        <OtherDetails
          open={open}
          distance={distance}
          rating={rating}
          number_of_rating={number_of_rating}
        />
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
            <p className="text-cent">
              Phone: <span className="font-medium">+234 816 4475 065</span>
            </p>

            <button className="w-[50%] rounded-md bg-cyan-700 py-3 text-sm text-white">
              Call Hospital
            </button>
          </div>
        )}

        {action === "address" && (
          <div className="flex w-[90%] flex-col items-center space-y-4 rounded-md border-2 p-3 py-5">
            <p className="text-cent">
              Address: <span className="font-medium">{address}</span>
            </p>

            <button className="w-[50%] rounded-md bg-cyan-700 py-3 text-sm text-white">
              Open in Google Maps
            </button>
          </div>
        )}
      </div>

      {/* Reviews */}
    </div>
  );
}

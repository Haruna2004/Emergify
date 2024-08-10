"use client";

import useMedics from "@/lib/store/useMedics";
import { MessageCircleMore, PhoneCall, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { doctor_testData } from "@/lib/server/testData";
import React from "react";

type Props = {};

export default function MedicProfile({}: Props) {
  const { activeMedic } = useMedics();
  const router = useRouter();

  if (!activeMedic) {
    router.push("/medics");
    return <div>loading...</div>;
  }

  const {
    name,
    description,
    imageUrl,
    speciality,
    patients,
    experience,
    rating,
    emailAddress,
    phoneNumber,
  } = activeMedic;

  return (
    <div>
      <div className="h-[20vh] w-full bg-cyan-600"></div>

      <div className="-mt-24 flex items-end justify-between px-5">
        {/* profile image */}
        <div className="h-42 w-32 rounded-md">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="profile"
              className="h-full w-full rounded-md object-cover"
              width={100}
              height={100}
            />
          ) : (
            <div className="h-full w-full"></div>
          )}
        </div>
        {/* contact buttons */}
        <div className="flex flex-1 items-start justify-between gap-3 pl-5">
          <Link href={""} className="rounded-md bg-yellow-500 p-3.5 text-white">
            <PhoneCall />
          </Link>
          <Link href={""} className="rounded-md bg-blue-500 p-3.5 text-white">
            <MessageCircleMore />
          </Link>
          <Link href={""} className="rounded-md bg-red-500 p-3.5 text-white">
            <Video />
          </Link>
        </div>
      </div>

      {/* name - desp */}
      <div className="mt-5 flex flex-col gap-1 px-5">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h3 className="font-medium">{speciality}</h3>
      </div>

      {/* experice */}
      <div className="mt-5 flex w-full items-center justify-between gap-3 px-5">
        <FiguresCard value={patients} title="Patients" />
        <FiguresCard value={experience} title="Experience" />
        <FiguresCard value={rating} title="Rating" />
      </div>
      {/* about */}
      <div className="mt-5 w-full px-5">{description}</div>
    </div>
  );
}

function FiguresCard({ value, title }: { value: string; title: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-around gap-1 rounded-md border p-3">
      <p>{title}</p>
      <p className="text-xl"> {value}</p>
    </div>
  );
}

"use client";
import ReadMore from "@/components/global/read-more";
import useMedics from "@/lib/store/useMedics";
import { MessageCircleMore, PhoneCall, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { bg_image } from "../../../public/assets";

type Props = {};

export default function MedicsProfile({}: Props) {
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
      {/* bg-cover */}
      <div className="relative -z-10 h-[20vh] w-full">
        {/* bglick */}
        <Image
          src={bg_image}
          className="h-full w-full object-cover opacity-80"
          alt="bg"
        />
      </div>

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
        <div className="flex flex-1 items-start justify-between gap-3 pl-5 sm:justify-start sm:gap-5">
          <Link
            href={`https://api.whatsapp.com/send`}
            target="_blank"
            className="rounded-md bg-yellow-500 p-3.5 text-white"
          >
            <PhoneCall />
          </Link>
          <Link
            href={`mailto:${emailAddress}`}
            className="rounded-md bg-blue-500 p-3.5 text-white"
          >
            <MessageCircleMore />
          </Link>
          <Link
            href={`https://meet.google.com/new?authuser=${emailAddress}`}
            className="rounded-md bg-red-500 p-3.5 text-white"
          >
            <Video />
          </Link>
        </div>
      </div>

      {/* name - desp */}
      <div className="mt-5 flex flex-col gap-1 px-5 text-cyan-900">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h3 className="font-medium">{speciality}</h3>
      </div>

      {/* experice */}
      <div className="mt-[4vh] flex w-full items-center justify-between gap-3 px-5 text-cyan-900">
        <FiguresCard value={patients} title="Patients" />
        <FiguresCard value={experience} title="Experience" />
        <FiguresCard value={rating} title="Rating" />
      </div>
      {/* about */}
      <div className="mt-[4vh] w-full px-5">
        <ReadMore content={description} className="text-cyan-900" />
      </div>
      {/* End sesssion */}
      <div className="mt-[7vh] flex w-full items-start justify-center px-5">
        <Link
          href={`/medics`}
          className="rounded-md bg-rose-700 p-2 px-5 text-center text-white"
        >
          End Session
        </Link>
      </div>
    </div>
  );
}

function FiguresCard({ value, title }: { value: string; title: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-around gap-1 rounded-md border border-cyan-400 p-3">
      <p className="text-xl font-medium text-cyan-700"> {value}</p>
      <p className="text-cyan-900">{title}</p>
    </div>
  );
}

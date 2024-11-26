"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseMedical,
  HospitalIcon,
  Stethoscope,
} from "lucide-react";
import { app_logo } from "../../../public/assets";
import Image from "next/image";
import { useVoiceContext } from "@/lib/client/contexts/voice-context";
import { AudioMutedOutlined, AudioOutlined } from "@ant-design/icons";
import cn from "classnames";
import { useTextToSpeech } from "@/lib/client/voice-assist/use-speech";
import { sleep } from "@/lib/utils";
import { openingStatement } from "@/contants/indext";
import { useToast } from "../ui/use-toast";

type Props = {};

const nav_buttons = [
  { title: "First Aid", value: "first-aid" },
  { title: "Hospital", value: "hospital" },
  { title: "Medics", value: "medics" },
];
const nav_links = [
  { title: "Register", value: "register" },
  { title: "About us", value: "about" },
];

export default function SidePanel({}: Props) {
  const [speechText, setSpeechText] = useState<string>("");
  const { playText, speechStatus, stopText } = useTextToSpeech(speechText);
  const { toast } = useToast();

  const { startPorcupine, stopPorcupine, isPorcupineListening } =
    useVoiceContext();

  async function turnOnVoiceMode() {
    if (isPorcupineListening) {
      stopPorcupine();
      console.log("Stopped listeing");
      if (speechStatus) stopText();
      return;
    }
    startPorcupine();
    toast({
      title: "Could Not Start Speech To Intent Engine",
      description:
        "Maximum number of active sessions exceeded (3/3) for Project Emergify. Upgrade to the Developer Plan for 100 active sessions.",
    });
    setSpeechText(openingStatement());
    await sleep(100);
    playText();
  }
  return (
    <div className="hidden flex-col bg-stone-100 p-5 shadow-md md:flex md:flex-[0.25] lg:flex-[0.15]">
      <Link
        href="/"
        className="mt-1 flex items-center gap-2 font-mono text-2xl font-semibold text-cyan-600"
      >
        <Image src={app_logo} alt="profile" className="h-8 w-8 rounded-full" />
        Emergify
      </Link>

      {/* voice mode button */}

      <div
        className={cn(
          "mt-[3vh] flex w-[85%] cursor-pointer items-center justify-between gap-3 rounded-full border bg-white p-1 px-3 font-medium text-cyan-700 lg:w-[90%]",
          isPorcupineListening && "animate-pulse border-cyan-500",
        )}
        onClick={turnOnVoiceMode}
      >
        <h3 className="whitespace-nowrap text-[1rem]">Voice Mode</h3>
        <div className="text-xl">
          {isPorcupineListening ? <AudioOutlined /> : <AudioMutedOutlined />}
        </div>
      </div>

      {/* navigations */}

      <div className="flex flex-1 flex-col justify-between">
        <NavigationButtons />
        <NavigationLinks />
      </div>
    </div>
  );
}

function NavigationLinks() {
  return (
    <div className="mb-[5vh] flex flex-col gap-2">
      {nav_links.map(({ value, title }) => (
        <Link
          href={`/${value}`}
          key={value}
          className="flex cursor-pointer items-center gap-1 rounded-md p-1 text-cyan-800 opacity-90 hover:opacity-100"
        >
          <ArrowUpRight className="h-3 w-3" />
          <p className="text-sm">{title}</p>
        </Link>
      ))}
    </div>
  );
}

function NavigationButtons() {
  return (
    <div className="mt-[5vh] flex w-full flex-col items-center justify-center gap-5">
      {nav_buttons.map(({ value, title }) => (
        // buttons
        <Link
          href={`/${value}`}
          key={value}
          className="flex cursor-pointer items-center justify-start gap-2 text-cyan-700"
        >
          <div>
            {value === "first-aid" && <BriefcaseMedical className="h-5 w-5" />}
            {value === "hospital" && <HospitalIcon className="h-5 w-5" />}
            {value === "medics" && <Stethoscope className="h-5 w-5" />}
          </div>
          <p className="text-[1.1rem] font-medium">{title}</p>
        </Link>
      ))}
    </div>
  );
}

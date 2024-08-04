"use client";
import { useVoiceContext } from "@/lib/client/contexts/voice-context";
import useToggleStore from "@/lib/store/useToggle";
import { AudioLines, CircleChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import cn from "classnames";

type Props = {};

export default function Header({}: Props) {
  const { sidebar, toggleSidebar } = useToggleStore();
  const { startPorcupine, stopPorcupine, isPorcupineListening } =
    useVoiceContext();

  function turnOnVoiceMode() {
    if (isPorcupineListening) {
      stopPorcupine();
      console.log("Stopped listeing");
      return;
    }
    startPorcupine();
  }

  return (
    <div className="sticky top-0 z-10 flex justify-between border-2 bg-white p-5 px-10 pr-6 text-[#03aed2] shadow-sm">
      <Link href="/" className="text-xl font-bold">
        {/* Save<span className="text-amber-600">a</span>Life */}
        Emergify
      </Link>

      <div className="flex items-center gap-5">
        {/* mircophone */}
        <div
          onClick={turnOnVoiceMode}
          className={cn(
            isPorcupineListening && "animate-pulse bg-cyan-700 text-white",
            "cursor-pointer rounded-full p-1.5",
          )}
        >
          <AudioLines className="" />
        </div>
        <CircleChevronDown
          className="h-6 w-6 cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
    </div>
  );
}

"use client";
import { sidebar_links } from "@/contants/indext";
import { useVoiceContext } from "@/lib/client/contexts/voice-context";
import useToggleStore from "@/lib/store/useToggle";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

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
    <div className="bg-blu-600 sticky top-0 z-10 flex justify-between border-2 bg-white p-5 px-10 text-[#03aed2] shadow-sm">
      <Link href="/" className="text-xl font-bold">
        {/* Save<span className="text-amber-600">a</span>Life */}
        Emergify
      </Link>

      <div className="flex gap-2">
        <button onClick={turnOnVoiceMode}>
          Voice Mode: {isPorcupineListening ? "On" : "Off"}
        </button>
        <MenuIcon className="cursor-pointer" onClick={toggleSidebar} />
      </div>
    </div>
  );
}

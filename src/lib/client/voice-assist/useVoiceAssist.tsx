"use client";
import React, { useEffect } from "react";
import { usePorcupine } from "@picovoice/porcupine-react";
import { Mic } from "lucide-react";
import cn from "classnames";

type Props = {};

export const porcupineKeyword = {
  publicPath: "/picovoice/Hey-Responder_en_wasm_v3_0_0.ppn",
  label: "Hey Responder", // An arbitrary string used to identify the keyword once the detection occurs.
};

export const porcupineModel = {
  publicPath: "/picovoice/porcupine_params.pv",
};

export default function VoiceAssist({}: Props) {
  const {
    keywordDetection,
    isLoaded,
    isListening,
    error,
    init,
    start,
    stop,
    release,
  } = usePorcupine();

  useEffect(() => {
    init(
      process.env.NEXT_PUBLIC_PICOVOICE_ACCESS_KEY as string,
      porcupineKeyword,
      porcupineModel,
    );

    console.log("Loaded wake word");

    return () => {
      if (isLoaded) {
        release();
        console.log("Realsesed wake word");
      }
    };
  }, [init, isLoaded, release]);

  useEffect(() => {
    if (keywordDetection !== null) {
      // ....use keyword detection result
      alert("Responder got your request");
      console.log("voice result", keywordDetection);
    }
  }, [keywordDetection]);

  function turnVoiceAssistOn() {
    if (isListening) {
      stop();
      return;
    }

    console.log("Started Voice mode");
    start();
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="absolute bottom-10 left-10 z-20">
      <button
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 p-2 text-white",
          isListening && "animate-pulse",
        )}
        onClick={turnVoiceAssistOn}
      >
        <Mic />
      </button>
    </div>
  );
}

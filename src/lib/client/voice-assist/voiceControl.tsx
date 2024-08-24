"use client";
import React, { useEffect, useMemo } from "react";
import { useRhino } from "@picovoice/rhino-react";
import cn from "classnames";
import { Mic } from "lucide-react";

type Props = {};

export default function VoiceControl({}: Props) {
  const {
    inference,
    contextInfo,
    isLoaded,
    isListening,
    error: rhinoError,
    init,
    process: rhinoProcess,
    release: rhinoRelease,
  } = useRhino();

  // const rhinoContext = {
  //   publicPath: "/picovoice/intents/v1/Emergify_en_wasm_v3_0_0.rhn",
  // };

  // const rhinoModel = {
  //   publicPath: "/picovoice/intents/rhino_params.pv",
  // };

  const rhinoContext = useMemo(
    () => ({
      publicPath: "/picovoice/intents/v1/Emergify_en_wasm_v3_0_0.rhn",
    }),
    [],
  );

  const rhinoModel = useMemo(
    () => ({
      publicPath: "/picovoice/intents/rhino_params.pv",
    }),
    [],
  );

  useEffect(() => {
    init(
      process.env.NEXT_PUBLIC_PICOVOICE_ACCESS_KEY as string,
      rhinoContext,
      rhinoModel,
    );

    // try comment or removing if an error occurs
    // return () => {
    //   if (isLoaded) {
    //     rhinoRelease();
    //   }
    // };
  }, [init, rhinoContext, rhinoModel]);

  useEffect(() => {
    if (inference !== null) {
      // ... use inference detection result
      console.log("command result", inference);
      // @ts-ignore
      // handleIntentRequest(inference);
    }
  }, [inference]);

  if (rhinoError) {
    console.log("Rhino Error", rhinoError, contextInfo);
  }

  async function startProcessing() {
    if (!isLoaded) {
      console.log("Voice has not loaded");
      return;
    }

    if (isListening) {
      await rhinoRelease();
      console.log("Stopped listenting");
      return;
    }

    console.log("Waiting for command");
    await rhinoProcess();
  }

  return (
    <div className="absolute bottom-10 left-10 z-20">
      <button
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 p-2 text-white",
          isListening && "animate-pulse",
        )}
        onClick={startProcessing}
      >
        <Mic />
      </button>
    </div>
  );
}

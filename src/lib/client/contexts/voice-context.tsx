"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePorcupine } from "@picovoice/porcupine-react";
import { useRhino } from "@picovoice/rhino-react";
import useVoiceHandler from "../hooks/use-voice-handler";

const VoiceContext = createContext<any>({} as any);

type Props = {
  children: React.ReactNode;
};

const KEYWORD = "Hey Responder";

export const VoiceProvider = ({ children }: Props) => {
  const [wakeWordDetected, setWakeWordDetected] = useState<string | null>(null);

  // Porcupine hook for wake word detection
  const {
    keywordDetection,
    isLoaded: isPorcupineLoaded,
    isListening: isPorcupineListening,
    error: porcupineError,
    init: porcupineInit,
    start: porcupineStart,
    stop: porcupineStop,
    release: porcupineRelease,
  } = usePorcupine();

  // Rhino hook for intent recognition
  const {
    inference,
    isLoaded: isRhinoLoaded,
    isListening: isRhinoListening,
    error: rhinoError,
    init: rhinoInit,
    process: rhinoProcess,
    release: rhinoRelease,
  } = useRhino();

  const { handleIntentRequest } = useVoiceHandler();

  useEffect(() => {
    porcupineInit(
      process.env.NEXT_PUBLIC_PICOVOICE_ACCESS_KEY as string,
      {
        publicPath: "/picovoice/Hey-Responder_en_wasm_v3_0_0.ppn",
        label: KEYWORD,
      },
      {
        publicPath: "/picovoice/porcupine_params.pv",
      },
    );

    rhinoInit(
      process.env.NEXT_PUBLIC_PICOVOICE_ACCESS_KEY as string,
      {
        publicPath: "/picovoice/intents/v1/Emergify_en_wasm_v3_0_0.rhn",
      },
      {
        publicPath: "/picovoice/intents/rhino_params.pv",
      },
    );
  }, [porcupineInit, rhinoInit]);

  useEffect(() => {
    if (keywordDetection?.label === KEYWORD) {
      setWakeWordDetected(keywordDetection.label);
      console.log("Wake word detected");
    }
  }, [keywordDetection]);

  // detect wake work
  useEffect(() => {
    let timer: any;
    if (wakeWordDetected) {
      rhinoProcess();
      console.log("Awaiting command");

      // Set a timer to stop the rhinoProcess after 10 seconds
      timer = setTimeout(() => {
        rhinoRelease();
        console.log("Stopped rhinoProcess after 10 seconds");
      }, 10000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [wakeWordDetected, rhinoProcess, rhinoRelease]);

  // intent is detected
  useEffect(() => {
    if (inference !== null) {
      console.log("Intent detected:", inference);
      //@ts-ignore
      handleIntentRequest(inference);
      setWakeWordDetected(null);
    }
  }, [inference, handleIntentRequest]);

  return (
    <VoiceContext.Provider
      value={{
        startPorcupine: porcupineStart,
        stopPorcupine: porcupineStop,
        startRhino: rhinoProcess,
        stopRhino: rhinoRelease,
        isPorcupineListening,
        isRhinoListening,
        porcupineError,
        rhinoError,
      }}
    >
      {children}
    </VoiceContext.Provider>
  );
};

export const useVoiceContext = () => useContext(VoiceContext);

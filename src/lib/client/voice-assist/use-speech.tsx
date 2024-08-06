"use client";
import React, { useEffect, useState } from "react";
import "regenerator-runtime/runtime";

import { useSpeech } from "react-text-to-speech";

export function useTextToSpeech(text: string) {
  const { Text, speechStatus, start, pause, stop } = useSpeech({
    text,
    pitch: 1.1,
    rate: 1.1,
    volume: 0.55,
    lang: "en-US",
    voiceURI: "Google UK English Male",
    highlightText: true,
  });

  useEffect(() => {
    console.log("Speech Status is ", speechStatus);
  }, [speechStatus]);

  return {
    playText: start,
    stopText: stop,
    pauseText: pause,
    speechStatus,
    TextOutput: Text,
  };
}

// speech to text

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export function useSpeechToText() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  return {
    speechSupport: browserSupportsSpeechRecognition,
    speechListening: listening,
    speechTranscript: transcript,
    resetTranscript,
    speechStart: SpeechRecognition.startListening,
    speechStop: SpeechRecognition.stopListening,
  };
}

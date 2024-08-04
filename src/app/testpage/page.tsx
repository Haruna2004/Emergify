"use client";

import {
  useSpeechToText,
  useTextToSpeech,
} from "@/lib/client/voice-assist/use-speech";
import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

export default function Donation({}: Props) {
  const [details, setDetails] = useState<any>({});
  async function sendRequest() {
    const res = await axios.post("/api/v1/request-medical", {
      situation: "He got hit",
    });

    const { data } = res.data;
    console.log(data);
    setDetails(data);
  }

  const [inputValue, setInputValue] = useState<string>("");
  const { playText, pauseText, stopText } = useTextToSpeech(inputValue);

  //
  const [speechValue, setSpeechValue] = useState<string>("");

  const {
    speechStart,
    speechListening,
    speechSupport,
    speechTranscript,
    speechStop,
  } = useSpeechToText();

  useEffect(() => {
    console.log(speechTranscript);
  }, [speechTranscript]);

  return (
    <div className="p-3">
      <p>{details.name || "Awaiting"}</p>
      <button
        onClick={sendRequest}
        className="mt-3 rounded-md bg-cyan-800 p-2 text-white"
      >
        Test Request
      </button>

      <div className="mt-5 flex w-fit flex-col">
        <input
          type="text"
          className="w-52 rounded-md border-2 p-2 outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="mt-3 rounded-md bg-cyan-800 p-2 text-white"
          onClick={playText}
        >
          Play Text
        </button>
      </div>
      {/* speech recognition */}
      <div className="mt-5 flex w-fit flex-col">
        <input
          type="text"
          className="w-52 rounded-md border-2 p-2 outline-none"
          value={speechValue}
          onChange={(e) => setSpeechValue(e.target.value)}
        />
        <p>{speechListening ? "Listening" : "Not listening"}</p>
        <p>{speechTranscript || "Waiting"}</p>

        {/* controls */}
        <div className="flex gap-3">
          <button
            className="mt-3 rounded-md bg-cyan-800 p-2 text-white"
            onClick={() => {
              if (speechListening) return;
              speechStart({ continuous: true });
            }}
          >
            Start
          </button>

          <button
            className="mt-3 rounded-md bg-cyan-800 p-2 text-white"
            onClick={() => {
              if (!speechListening) return;
              speechStop();
            }}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

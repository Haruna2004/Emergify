"use client";
import axios from "axios";
import React, { useState } from "react";

type Props = {};

export default function Learn({}: Props) {
  const [details, setDetails] = useState<any>({});

  async function sendRequest() {
    const res = await axios.post("/api/v1/request-medical", {
      situation: "He got hit",
    });

    const { data } = res.data;
    console.log(data);
    setDetails(data);
  }

  return (
    <div className="p-3">
      <p>{details.name || "Awaiting"}</p>
      <button
        onClick={sendRequest}
        className="mt-3 rounded-md bg-cyan-800 p-2 text-white"
      >
        Test Request
      </button>
    </div>
  );
}

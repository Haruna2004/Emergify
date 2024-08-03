"use client";
import { getAIFirstAid, sendImagePrompt } from "@/lib/client/getFirstAid";
import { ImagePlus, SendHorizonal } from "lucide-react";
import React, { useState } from "react";
import { useToast } from "../ui/use-toast";
import { Message } from "@/lib/types";
import Image from "next/image";

type Props = {
  setMessages: any;
  messages: Message[];
  setLoadingAI: any;
  loadingAI: boolean;
};

export default function ChatInput({
  setMessages,
  messages,
  loadingAI,
  setLoadingAI,
}: Props) {
  const [textInput, setTextInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [buffer, setBuffer] = useState<string | ArrayBuffer>("");
  const [displayImage, setDisplayImage] = useState("");
  const { toast } = useToast();

  const handleFileChange = (e: any) => {
    const f = e.target.files[0];
    console.log(f);
    setFile(f);

    setDisplayImage(window.URL.createObjectURL(f));
    setBuffer(window.URL.createObjectURL(f));
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    const reader = new FileReader();

    reader.onloadend = () => {
      // setFile(reader.result!);
      // @ts-ignore
      const base64Data = reader.result.split(",")[1];

      setBuffer(base64Data);
    };
    if (f && allowedTypes.includes(f.type)) {
      reader.readAsDataURL(f);
    }
  };

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!textInput)
      return toast({
        description: "Input is required",
        variant: "destructive",
        duration: 500,
      });

    setLoadingAI(true);
    let currentText = textInput;
    setTextInput("");
    setFile(null);
    setBuffer("");
    setDisplayImage("");

    const oldMessages = messages;

    setMessages((prevMessages: any) => [
      ...prevMessages,
      { role: "user", parts: [{ text: textInput }] },
    ]);

    // call ai and get response

    if (textInput && file !== null) {
      console.log("uploading file");
      const result = await sendImagePrompt(messages, textInput, file, buffer);
    } else {
      const result = await getAIFirstAid(messages, textInput);

      // const result = "Ai is responding";

      if (!result) {
        setMessages(oldMessages);
        setTextInput(currentText);
        setLoadingAI(false);
        return toast({
          description: "Sorry we could not get response. Try again",
          duration: 1000,
        });
      }

      setMessages((prevMessages: any) => [
        ...prevMessages,
        { role: "model", parts: [{ text: result }] },
      ]);
      setTextInput("");
      setLoadingAI(false);
    }
  }

  return (
    <form
      className="z-10 flex w-full items-center gap-2 rounded-md border-2 bg-white p-2"
      onSubmit={handleSubmit}
    >
      <div className="w-full">
        {file !== null && (
          <Image
            src={displayImage}
            alt="uploaded media"
            width={150}
            height={150}
            className="mb-2 rounded-md"
          />
        )}
        <input
          type="text"
          className="w-full outline-none"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Type text here..."
        />
      </div>

      <label htmlFor="promptFile">
        <ImagePlus className="cursor-pointer text-[#2985bc]" />
      </label>
      <input
        className="hidden"
        type="file"
        id="promptFile"
        name="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button type="submit" disabled={loadingAI}>
        <SendHorizonal className="cursor-pointer text-[#2985bc]" />
      </button>
    </form>
  );
}

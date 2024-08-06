"use client";
import { getAIFirstAid } from "@/lib/client/getFirstAid";
import { ImagePlusIcon, Mic, SendHorizonal, X } from "lucide-react";
import React, { ChangeEvent, useRef, useState } from "react";
import { useToast } from "../ui/use-toast";
import { Message } from "@/lib/types";
import TextareaAutosize from "react-textarea-autosize";
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
  const [imageInput, setImageInput] = useState<any>();
  const { toast } = useToast();
  const fileref = useRef(null);

  const changeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        alert("File is too large (Max Size 5MB)");
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        //@ts-ignore
        // const base64String = reader.result.split(",")[1];
        setImageInput(reader.result);
        // console.log(base64String);
      };
    }
  };

  const removeImage = () => {
    if (imageInput) {
      setImageInput(null);
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

    const oldMessages = messages;

    setMessages((prevMessages: any) => [
      ...prevMessages,
      { role: "user", parts: [{ text: textInput }] },
    ]);

    // call ai and get response
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

  return (
    <form
      className="z-10 flex w-full flex-col items-start gap-3 rounded-md border-2 bg-white p-3"
      onSubmit={handleSubmit}
    >
      <TextareaAutosize
        className="w-full resize-none text-base text-cyan-900 outline-none md:bg-transparent"
        placeholder="Enter a prompt here"
        autoFocus={true}
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />

      <div className="flex w-full justify-between">
        {imageInput ? (
          <div className="relative h-12 w-12">
            <Image
              src={imageInput}
              alt="image"
              className="h-full w-full rounded-md"
              height={0}
              width={0}
            />
            <X
              className="right absolute right-0 top-0 cursor-pointer text-red-600 opacity-80"
              onClick={removeImage}
            />
          </div>
        ) : (
          <div
            onClick={() => {
              //@ts-ignore
              fileref.current.click();
            }}
          >
            <ImagePlusIcon className="h-7 w-7 cursor-pointer text-cyan-800 opacity-80" />
            <input
              ref={fileref}
              type="file"
              accept="image/*"
              onChange={changeImage}
              className="hidden"
              aria-label="Upload Photo"
            />
          </div>
        )}

        <div className="flex items-center gap-2 text-cyan-800">
          <Mic className="h-7 w-7 cursor-pointer" />

          {textInput && (
            <button
              disabled={loadingAI}
              type="submit"
              className="rounded-full bg-cyan-700 p-2 text-white"
            >
              <SendHorizonal className="h-4 w-4 cursor-pointer" />
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

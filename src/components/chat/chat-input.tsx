"use client";
import { getAIFirstAid } from "@/lib/client/getFirstAid";
import { SendHorizonal } from "lucide-react";
import React, { useState } from "react";
import { useToast } from "../ui/use-toast";
import { Message } from "@/lib/types";

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
  const { toast } = useToast();

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
      className="z-10 flex w-full items-start gap-2 rounded-md border-2 bg-white p-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full outline-none"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="Type text here..."
      />
      <button type="submit" disabled={loadingAI}>
        <SendHorizonal className="cursor-pointer text-[#2985bc]" />
      </button>
    </form>
  );
}

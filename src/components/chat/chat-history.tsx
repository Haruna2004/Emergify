import React from "react";
import ChatMessage from "./chat-message";
import { Message } from "@/lib/types";

type Props = {
  messages: Message[];
};

export default function ChatHistory({ messages }: Props) {
  return (
    <>
      {messages.map(({ role, parts }, index) => (
        <ChatMessage key={index} role={role} content={parts[0].text} />
      ))}
    </>
  );
}

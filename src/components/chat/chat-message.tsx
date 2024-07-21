import Image from "next/image";
import React from "react";
import { app_logo, vercel_logo } from "../../../public/assets";
import Markdown from "react-markdown";

type Props = {
  role: string;
  content: string;
};

export default function ChatMessage({ role, content }: Props) {
  return role === "user" ? (
    <UserMessage content={content} />
  ) : (
    <AIMessage content={content} />
  );
}

export function UserMessage({ content }: any) {
  return (
    <div className="flex w-full justify-end">
      <p className="bg-ble-500 max-w-[50%] rounded-xl bg-[#2985bc] p-3 text-white">
        {content}
      </p>
    </div>
  );
}

export function AIMessage({ content }: any) {
  return (
    <div className="flex items-start gap-5">
      <Image src={app_logo} alt="profile" className="h-10 w-10 rounded-full" />
      <Markdown className="prose">{content}</Markdown>
    </div>
  );
}

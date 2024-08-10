"use client";
import { ImagePlusIcon, Mic, SendHorizonal } from "lucide-react";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import cn from "classnames";

type SituationProps = {
  situationText: string;
  updateSituation: any;
  handleSubmit: any;
  headerStyles?: string;
};

export default function SituationInput({
  situationText,
  updateSituation,
  handleSubmit,
  headerStyles,
}: SituationProps) {
  const [imageInput, setImageInput] = useState<any>(null);

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      <h1
        className={cn(
          "text-center font-mono text-xl text-cyan-700 md:rounded-sm md:bg-white/40 md:p-2 md:text-cyan-800",
          headerStyles,
        )}
      >
        Describe your situation
      </h1>

      {/* input-area */}
      <div className="relative flex w-full flex-col gap-3 rounded-md border bg-white focus-within:bg-white/70 md:max-w-4xl md:bg-white/50">
        <TextareaAutosize
          className="w-full resize-none p-5 text-base text-cyan-900 outline-none md:bg-transparent"
          placeholder="E.g He got hit . . ."
          value={situationText}
          autoFocus={true}
          onChange={(e) => updateSituation(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div className="flex items-center justify-end gap-2 p-2 pb-2 pr-3 text-cyan-800">
          {!situationText ? (
            <Mic className="h-10 w-10 scale-75 cursor-pointer opacity-60" />
          ) : (
            <SendHorizonal
              className="h-12 w-12 scale-75 cursor-pointer rounded-full bg-cyan-800 p-2 text-white transition-all duration-100"
              onClick={handleSubmit}
            />
          )}
          {/* <Mic className="-mr-1 h-10 w-10 scale-75 cursor-pointer opacity-60" /> */}
          {/* <SendHorizonal
            className="h-12 w-12 scale-75 cursor-pointer rounded-full bg-cyan-800 p-2 text-white"
            onClick={handleSubmit}
          /> */}
        </div>
      </div>
    </>
  );
}

"use client";
import { getAIFirstAid } from "@/lib/client/getFirstAid";
import { PaperclipIcon, SendHorizonal } from "lucide-react";
import React, { useState, useRef } from "react";
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
  const [audioInput, setAudioInput] = useState<Blob | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const { toast } = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [audio, setAudio] = useState<File | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  async function handleFileUpload(e: any) {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;

    if (file.type.startsWith("audio/")) {
      setAudioInput(file);
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result;
        if (!text) return;
        setTextInput(text.toString());
      };
      reader.readAsText(file);
    }
    e.target.value = null;
  }

  async function displayChoiceModal() {
    setShowOptions(true);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!textInput && !audioInput)
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
      { role: "user", parts: [{ text: textInput, audio: audioInput }] },
    ]);

    const result = await getAIFirstAid(messages, textInput, audioInput);

    if (!result) {
      setMessages(oldMessages);
      setTextInput(currentText);
      setAudioInput(null);
      setLoadingAI(false);
      return toast({
        description: "Sorry we could not get a response. Try again",
        duration: 1000,
      });
    }

    setMessages((prevMessages: any) => [
      ...prevMessages,
      { role: "model", parts: [{ text: result }] },
    ]);
    setTextInput("");
    setAudioInput(null);
    setLoadingAI(false);
  }

  const handleStartRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.ondataavailable = (event) => {
          audioChunksRef.current.push(event.data);
        };
        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
          const recordedAudio = new File([audioBlob], 'recorded-audio.wav', { type: 'audio/wav' });
          setAudio(recordedAudio);
          setAudioInput(recordedAudio);
          audioChunksRef.current = [];
        };
        mediaRecorder.start();
        setIsRecording(true);
      })
      .catch(error => {
        console.error('Error accessing microphone:', error);
        toast({
          description: "Error accessing microphone",
          variant: "destructive",
          duration: 500,
        });
      });
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleClearAudio = () => {
    setAudio(null);
    setAudioInput(null);
  }

  return (
    <form
      className="z-10 flex w-full items-start gap-2 rounded-md border-2 bg-white p-2"
      onSubmit={handleSubmit}
    >
      <button type="button" onClick={displayChoiceModal}>
        <PaperclipIcon className="cursor-pointer text-[#2985bc]" />
      </button>
      {showOptions && (
        <div className="absolute -top-36 left-6 mt-10 flex flex-col bg-white border-2 border-[#2985bc] shadow-lg rounded">
          <button
            type="button"
            onClick={() => {
              setShowOptions(false);
              document.getElementById('fileInput')?.click();
            }}
            className="p-2 hover:bg-gray-200 border border-[#2985bc] text-left"
          >
            Select from computer
          </button>
          <button
            type="button"
            onClick={() => {
              setShowOptions(false);
              handleStartRecording();
            }}
            className="p-2 hover:bg-gray-200 border border-[#2985bc] text-left"
          >
            Record
          </button>
        </div>
      )}
      <input
        type="file"
        id="fileInput"
        className="hidden"
        accept="text/*,audio/*"
        onChange={handleFileUpload}
      />
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

      {isRecording && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-md min-w-[400px] min-h-[300px]">
            <h2 className="text-center text-[#2985bc] font-semibold text-2xl">Audio Recorder</h2>
            <div className="m-5 flex justify-center">
              {audio && (
                <audio className="border rounded-2xl justify-center border-[#2985bc]" controls>
                  <source src={URL.createObjectURL(audio)} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
            <div className="flex justify-center gap-5 mt-20">
              <button className="bg-[#2985bc] mt-12 px-3 py-4 text-xl font-semibold rounded-2xl text-white" onClick={
                audio ? handleClearAudio : handleStartRecording
              }>
                {audio ? "Clear Audio" : "Start Recording"}
              </button>
              <button className="bg-[#2985bc] mt-12 px-3 py-4 text-xl font-semibold rounded-2xl text-white" onClick={handleStopRecording}>
                Stop Recording
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}

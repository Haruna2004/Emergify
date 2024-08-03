import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import { Message } from "../types";
import { firstAidSysPrompt } from "@/contants/ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const GEMINI_MODEL = "gemini-1.5-flash";
const fileManager = new GoogleAIFileManager(
  process.env.GEMINI_API_KEY as string
);
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Chat response generation
export async function getAiChatResponse(
  history: Message[],
  prompt: string,
  systemPrompt?: string
) {
  const model = genAI.getGenerativeModel({
    model: GEMINI_MODEL,
    systemInstruction: systemPrompt,
    generationConfig,
  });

  const chatSession = model.startChat({ history: history });
  const result = await chatSession.sendMessage(prompt);
  const text = result.response.text();

  console.log(text);
  return text;
}

export async function getAiImageResponse(
  history: Message[],
  prompt: string,
  file: File,
  buffer: ArrayBuffer
) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: firstAidSysPrompt,
    generationConfig,
  });

  const chatSession = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: `Image data: ${buffer}`, // Incorporate base64 image data
          },
        ],
      },
      ...history,
    ],
  });

  const result = await chatSession.sendMessage(`${prompt}: ${buffer}`);
  const text = result.response.text();

  console.log(text);
  return text;
}

// Single content generation

export async function getAiResponse(prompt: string, systemPrompt?: string) {
  const model = genAI.getGenerativeModel({
    model: GEMINI_MODEL,
    systemInstruction: systemPrompt,
    generationConfig,
  });

  const result = await model.generateContent(prompt);

  const response = result.response;

  const text = response.text();

  console.log(text);
  return text;
}

import { GoogleGenerativeAI } from "@google/generative-ai";
import { Message } from "../types";
import { firstAidSysPromp } from "@/contants/ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function getAiChatResponse(history: Message[], prompt: string) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: firstAidSysPromp,
    generationConfig,
  });

  const chatSession = model.startChat({ history: history });
  const result = await chatSession.sendMessage(prompt);
  const text = result.response.text();

  console.log(text);
  return text;
}

// Single content generation

export async function getAiResponse(prompt: string) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig,
  });

  const result = await model.generateContent(prompt);

  const response = result.response;

  const text = response.text();

  console.log(text);
  return text;
}
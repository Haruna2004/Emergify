import { GoogleGenerativeAI } from "@google/generative-ai";
import { Message } from "../types";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const GEMINI_MODEL = "gemini-1.5-flash";

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
  systemPrompt?: string,
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

// Single content generation

interface AiOptionalParams {
  systemPrompt?: string;
  responseMimeType?: string;
}

export async function getAiResponse(
  prompt: string,
  { systemPrompt, responseMimeType }: AiOptionalParams,
) {
  if (responseMimeType) generationConfig.responseMimeType = responseMimeType;

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

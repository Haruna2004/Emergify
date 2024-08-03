import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import { Message } from "../types";
import { firstAidSysPromp } from "@/contants/ai";
import { URL } from "url";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const fileManager = new GoogleAIFileManager(
  process.env.GEMINI_API_KEY as string,
);
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

async function fileToGenerativePart(file: any) {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader = new FileReader();
    // @ts-ignore
    reader.onloadend = () => resolve(reader.result!.split(",")[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
}

async function uploadToGemini(path: any, mimeType: string, name: string) {
  const uploadResult = await fileManager.uploadFile(path, {
    mimeType: mimeType,
    displayName: "new name",
  });
  const file = uploadResult.file;
  console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
  return file;
}

export async function getAiImageResponse(
  history: Message[],
  prompt: string,
  file: File,
  buffer: ArrayBuffer,
) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: firstAidSysPromp,
    generationConfig,
  });

  const uploadedFile = await uploadToGemini(buffer, file.type, file.name);

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

  // return await uploadToGemini(file, file.type).then(
  //   async (res) => {
  //     console.log("returned file", res);
  //     const result = await model.generateContent([res.uri, prompt]);

  //     const text = result.response.text();

  //     console.log(text);
  //     return text;
  //   },
  // );
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

// const chatSession = model.startChat({
//   generationConfig,
//   // safetySettings: Adjust safety settings
//   // See https://ai.google.dev/gemini-api/docs/safety-settings
//   history: [
//     {
//       role: "user",
//       parts: [
//         {
//           fileData: {
//             mimeType: files[0].mimeType,
//             fileUri: files[0].uri,
//           },
//         },
//         { text: "what is in this image" },
//       ],
//     },
//     {
//       role: "model",
//       parts: [
//         {
//           text: "A beagle dog looks directly at the camera. The dog has its ears perked and is looking intently at the viewer. The dog's nose is in focus, and the rest of the dog's face is slightly out of focus. The background is a blurry brown color.",
//         },
//       ],
//     },
//   ],
// });

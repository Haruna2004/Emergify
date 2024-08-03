import { Message } from "../types";

export async function getAIFirstAid(messages: Message[], prompt: string) {
  try {
    const result = await fetch("/api/v1/get-first-aid", {
      method: "POST",
      body: JSON.stringify({
        prompt: prompt,
        history: messages,
      }),
    });

    const data = await result.json();

    if (!data.success) {
      alert("Could not get message");
      return "";
    }

    return data.message;
  } catch (error) {
    console.log(error);
  }
}

export async function sendImagePrompt(
  messages: Message[],
  prompt: string,
  file: File,
  buffer: string | ArrayBuffer,
) {
  try {
    const result = await fetch("/api/v1/image-prompt", {
      method: "POST",
      body: JSON.stringify({
        buffer: buffer,
        file: file,
        prompt: prompt,
        history: messages,
      }),
    });

    const data = await result.json();
    console.log(data);
    if (!data.success) {
      alert("Could not get message");
      return "";
    }

    return data.message;
  } catch (error) {
    console.log(error);
  }
}

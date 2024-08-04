import { Message } from "../types";

export async function getAIFirstAid(messages: Message[], prompt: string, audio?: any) {
  try {
    const result = await fetch("/api/v1/get-first-aid", {
      method: "POST",
      body: JSON.stringify({
        prompt: prompt,
        history: messages,
        audio: audio,
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

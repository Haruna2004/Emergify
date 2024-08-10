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
      return "";
    }

    return data.message;
  } catch (error) {
    console.log(error);
  }
}

export const runtime = "edge";

import { firstAidSysPrompt } from "@/contants/ai";
import { getAiChatResponse } from "@/lib/server/aiResponse";

export async function POST(request: Request) {
  try {
    const { history, prompt } = await request.json();

    const aiText = await getAiChatResponse(history, prompt, firstAidSysPrompt);

    if (!aiText) {
      return Response.json({
        success: false,
        message: "Ai did not return next",
      });
    }

    return Response.json({
      success: true,
      message: aiText,
    });
  } catch (error) {
    console.error(error);
    return Response.json({
      success: false,
      message: `Server error: ${error}`,
    });
  }
}

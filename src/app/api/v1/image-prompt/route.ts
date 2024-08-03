import { getAiChatResponse, getAiImageResponse } from "@/lib/server/aiResponse";

export async function POST(request: Request) {
  try {
    const { history, prompt, file, buffer } = await request.json();

    const aiText = await getAiImageResponse(history, prompt, file, buffer);

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

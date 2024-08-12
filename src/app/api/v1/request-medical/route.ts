export const runtime = "edge";

import { doctor_Data } from "@/lib/server/testData";

export async function POST(request: Request) {
  try {
    const { situation } = await request.json();

    if (!situation) {
      return Response.json({
        status: 400,
        message:
          "Request Unsuccessful: 'situation' is Undefined or Empty in request body.  ",
      });
    }

    // call function to process the request

    return Response.json({
      status: 200,
      message: "Request Successful",
      data: doctor_Data,
    });
  } catch (error) {
    console.log("Server Error:", error);
    return Response.json({
      status: 500,
      message: "Server Error: Contact Backend Developer",
      error: error,
    });
  }
}

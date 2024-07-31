import { doctor_testData } from "@/lib/server/testData";

export async function POST(request: Request) {
  try {
    const { situation } = await request.json();

    if (!situation) {
      return Response.json({
        status: 400,
        message:
          "Request Unsuccessful: 'situation' is undefined in request body.  ",
      });
    }

    return Response.json({
      status: 200,
      message: "Medical Personal Gotten successfully",
      data: doctor_testData,
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

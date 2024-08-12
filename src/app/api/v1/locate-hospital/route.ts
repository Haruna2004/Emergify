export const runtime = "edge";
import { getHospitals } from "@/lib/server/getHospitalsList";

export async function POST(request: Request) {
  try {
    const { situation, hospitals } = await request.json();
    // console.log(situation, hospitals);

    if (!situation || !hospitals) {
      return Response.json({
        status: 400,
        message:
          "Request Unsuccessful: 'situation' | 'hospitals'  is Undefined  in request body.  ",
      });
    }

    // call function to process the request
    const hospital_list = await getHospitals(situation, hospitals);

    if (hospital_list) {
      return Response.json({
        status: 200,
        message: "Request Successful",
        data: hospital_list,
      });
    }

    return Response.json({
      status: 400,
      message: "Could not get any hospitals",
      data: [],
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

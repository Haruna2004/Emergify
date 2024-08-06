export const runtime = "edge";

export async function POST(request: Request) {
  return Response.json({
    success: true,
  });
}

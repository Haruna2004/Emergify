import { twiml } from "twilio";

const MessagingResponse = twiml.MessagingResponse;

export default async function Reply(requestBody: {}, res: any) {
  const twiml = new MessagingResponse();

  // construct reply
  twiml.message("The Robots are coming! Head for the hills!");
  res.status(200).header({ "Content-type": "text/xml" });
  res.send(twiml.toString());
}

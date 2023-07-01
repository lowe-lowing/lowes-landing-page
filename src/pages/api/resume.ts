// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";
import { ResumeValidator } from "@/utils/ResumeValidator";

const scopes = ["https://www.googleapis.com/auth/drive"];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Buffer>) {
  const private_key = Buffer.from(process.env.PRIVATE_KEY as string, "base64").toString("utf8");

  try {
    const auth = new google.auth.JWT(process.env.CLIENT_EMAIL, undefined, private_key, scopes);
    const drive = google.drive({ version: "v3", auth });
    const { id } = ResumeValidator.parse(req.body);
    const cv = await drive.files.export(
      {
        fileId: id,
        mimeType: "application/pdf",
      },
      { responseType: "arraybuffer" }
    );
    res.send(Buffer.from(cv.data as string));
  } catch (error: any) {
    throw new Error(error);
  }
}

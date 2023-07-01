// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const private_key = Buffer.from(process.env.PRIVATE_KEY as string, "base64").toString("ascii");
  console.log(private_key);

  res.json({
    name: "John Doe",
    a: process.env.CLIENT_EMAIL,
    b: private_key,
  });
}

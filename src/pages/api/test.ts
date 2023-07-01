// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const private_key = process.env.PRIVATE_KEY!.replace(/\\n/g, "\n");

  res.json({
    name: "John Doe",
    a: process.env.CLIENT_EMAIL,
    w: private_key,
  });
}

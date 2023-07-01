// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  res.json({
    a: process.env.CLIENT_EMAIL,
    b: process.env.PRIVATE_KEY,
  });
}

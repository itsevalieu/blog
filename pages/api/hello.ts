// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}

/**
 * API endpoint: /posts -> github issues
 * Params: {
 * username
 * pagination(?)
 * }
 *
 * Returns: {
 * title
 * description
 * content
 * labels
 * comments
 * date published
 * date updated
 * author
 * }
 *
 */

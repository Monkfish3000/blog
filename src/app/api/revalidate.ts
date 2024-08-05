// pages/api/revalidate.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    // Revalidate the specific path
    await res.revalidate("/"); // Revalidate the home page
    // Add more paths if necessary
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: "Error revalidating" });
  }
}

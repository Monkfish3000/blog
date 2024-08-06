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
    const pathsToRevalidate = ["/", "/articles"];

    // console.log("inside revalidate -> ");

    // Check if a specific path is provided in the query parameters
    if (req.query.path) {
      pathsToRevalidate.push(req.query.path as string);
    }

    // console.log("Revalidating paths:", pathsToRevalidate);

    // Revalidate each path
    await Promise.all(pathsToRevalidate.map((path) => res.revalidate(path)));

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: "Error revalidating" });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";
import { NotAuthorizedError } from "@/errors/not-authorized-error";

export function requireAuth(
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function
) {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  next();
}

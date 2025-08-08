import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  name: string;
  email: string;
}

declare module "next" {
  interface NextApiRequest {
    currentUser: UserPayload | null;
  }
}

export function currentUser(
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function
) {
  if (!req.cookies?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.cookies.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.currentUser = payload;
  } catch (err) {
    req.currentUser = null;
  }
  next();
}

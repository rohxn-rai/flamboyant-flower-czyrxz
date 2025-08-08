import type { NextApiRequest, NextApiResponse } from "next";
import { verifyToken, TokenPayload } from "./jwt"; // from your existing jwt utils
import { parse } from "cookie";

export interface AuthenticatedNextApiRequest extends NextApiRequest {
  currentUser?: TokenPayload;
}

export async function currentUser(
  req: NextApiRequest,
  res: NextApiResponse,
  next: (req: AuthenticatedNextApiRequest) => any
) {
  const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
  const base64 = cookies.auth;
  if (!base64) {
    return next(req as AuthenticatedNextApiRequest);
  }

  const json = Buffer.from(base64, "base64").toString("utf8");
  const { jwt: token } = JSON.parse(json);
  const user = verifyToken(token);
  if (user) {
    (req as AuthenticatedNextApiRequest).currentUser = user;
  }

  return next(req as AuthenticatedNextApiRequest);
}

export function requireAuth(
  handler: (req: AuthenticatedNextApiRequest, res: NextApiResponse) => any
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    await currentUser(req, res, async (authReq) => {
      if (!authReq.currentUser) {
        return res.status(401).json({ error: "Not authorized" });
      }
      return handler(authReq, res);
    });
  };
}

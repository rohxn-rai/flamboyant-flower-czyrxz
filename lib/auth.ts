import { NextRequest, NextResponse } from "next/server";
import { verifyToken, TokenPayload } from "./jwt";
import { parse } from "cookie";

export async function getCurrentUser(
  req: NextRequest
): Promise<TokenPayload | null> {
  const cookie = req.headers.get("cookie") || "";
  const parsed = parse(cookie);
  const base64 = parsed.auth;
  if (!base64) return null;

  try {
    const json = Buffer.from(base64, "base64").toString("utf-8");
    const data = JSON.parse(json);
    const token = data.jwt;
    const payload = verifyToken(token);
    return payload;
  } catch {
    return null;
  }
}

export function requireAuth(user: TokenPayload | null) {
  if (!user) {
    const res = NextResponse.json({ error: "Not authorized" }, { status: 401 });
    throw res;
  }
}

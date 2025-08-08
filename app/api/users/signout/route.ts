import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
  const cookie = serialize("auth", "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0),
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  const res = NextResponse.json({ ok: true });
  res.headers.set("Set-Cookie", cookie);
  return res;
}

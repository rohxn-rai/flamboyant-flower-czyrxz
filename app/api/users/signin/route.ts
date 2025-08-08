import { NextRequest, NextResponse } from "next/server";
import { validateUser } from "@/lib/users";
import { signToken } from "@/lib/jwt";
import { serialize } from "cookie";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const user = await validateUser(email, password);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken({
    id: user.id,
    name: user.name,
    email: user.email,
  });
  const json = JSON.stringify({ jwt: token });
  const base64 = Buffer.from(json).toString("base64");
  const cookie = serialize("auth", base64, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  const res = NextResponse.json({ ok: true });
  res.headers.set("Set-Cookie", cookie);
  return res;
}

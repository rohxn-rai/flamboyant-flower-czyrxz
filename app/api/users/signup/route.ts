import { NextRequest, NextResponse } from "next/server";
import { registerUser, findUserByEmail } from "@/lib/users";

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (findUserByEmail(email)) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }

  await registerUser(name, email, password);
  return NextResponse.json({ ok: true }, { status: 201 });
}

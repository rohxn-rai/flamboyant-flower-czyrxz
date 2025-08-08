import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";
const EXPIRATION = "1h";

export interface TokenPayload {
  id: string;
  name: string;
  email: string;
  iat?: number;
  exp?: number;
}

export function signToken(payload: {
  id: string;
  name: string;
  email: string;
}): string {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRATION });
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    if (typeof decoded === "object" && decoded !== null) {
      const { id, name, email } = decoded as JwtPayload;

      if (
        typeof id === "string" &&
        typeof name === "string" &&
        typeof email === "string"
      ) {
        return {
          id,
          name,
          email,
        };
      }
    }

    return null;
  } catch {
    return null;
  }
}

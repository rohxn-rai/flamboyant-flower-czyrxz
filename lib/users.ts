import { Password } from "./password";

export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

let users: User[] = [];

export async function registerUser(
  name: string,
  email: string,
  password: string
): Promise<User> {
  const passwordHash = await Password.toHash(password);
  const user: User = { id: crypto.randomUUID(), name, email, passwordHash };
  users.push(user);
  return user;
}

export function findUserByEmail(email: string): User | undefined {
  return users.find((u) => u.email === email);
}

export async function validateUser(
  email: string,
  password: string
): Promise<User | undefined> {
  const user = findUserByEmail(email);
  if (user && (await Password.compare(user.passwordHash, password))) {
    return user;
  }
  return undefined;
}

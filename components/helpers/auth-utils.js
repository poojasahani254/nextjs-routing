import { hash, compare } from "bcryptjs";

export async function hashPassword(password) {
  return await new hash(password, 12);
}

export async function VerifyPassword(password, hashPassword) {
  return await compare(password, hashPassword);
}

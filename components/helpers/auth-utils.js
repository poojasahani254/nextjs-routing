import { hash } from "bcryptjs";

export async function hashPassword(password) {
  return await new hash(password, 12);
}

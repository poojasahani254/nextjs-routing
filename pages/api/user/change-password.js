import { getSession } from "next-auth/client";
import { connectDb, findOne } from "../../../components/helpers/db-utils";
import {
  hashPassword,
  VerifyPassword,
} from "../../../components/helpers/auth-utils";

export default async function changePasswordHandler(req, res) {
  if (req.method !== "PATCH") return;

  const session = await getSession({ req: req });

  if (!session) {
    return res.status(401).json({ message: "Not authenticated user!" });
  }

  const email = session.user.email;
  const { oldPassword, newPassword } = req.body;

  const client = await connectDb();
  const User = await findOne(client, "users", { email: email });

  if (!User) {
    await client.close();
    return res.status(404).json({ message: "User not Exists!!" });
  }

  const hasNewPassword = await hashPassword(newPassword);
  const verifyPassword = await VerifyPassword(oldPassword, User.password);

  if (!verifyPassword) {
    await client.close();
    return res.status(403).json({ message: "Existing password is invalid!" });
  }

  await client
    .db()
    .collection("users")
    .updateOne({ email: email }, { $set: { password: hasNewPassword } });

  await client.close();
  return res.status(200).json({ message: "Successfully updated !" });
}

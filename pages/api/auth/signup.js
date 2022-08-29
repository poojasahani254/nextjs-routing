import {
  connectDb,
  findOne,
  insertDocument,
} from "../../../components/helpers/db-utils";
import { hashPassword } from "../../../components/helpers/auth-utils";

async function SignupHandler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({ message: "Provided details are not valid !" });
      return;
    }

    const client = await connectDb();
    const alreadyExists = await findOne(client, "users", { email: email });
    if (alreadyExists) {
      await client.close();
      return res.status(422).json({ message: "User Already Exists!!" });
    } else {
      const hasPassword = await hashPassword(password);

      await insertDocument(client, "users", {
        email: email,
        password: hasPassword,
      });
      await client.close();

      return res.status(200).json({ message: "Successfully user added !" });
    }
  }
}

export default SignupHandler;

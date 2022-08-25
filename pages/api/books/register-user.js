import {
  connectDb,
  insertDocument,
} from "../../../components/helpers/db-utils";

export default async function registerHandler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Email are not valid" });
      return;
    }

    let client;
    try {
      client = await connectDb();
    } catch (e) {
      res.status(500).json({ message: "Failed to connect with database!" });
      return;
    }

    try {
      await insertDocument(client, "emails", { email: email });
      await client.close();
    } catch (e) {
      res.status(500).json({ message: "Failed to insert the document!" });
      return;
    }

    return res.status(200).json({ message: "Success !" });
  }

  return res.status(200).json({ message: "something went to wrong !" });
}

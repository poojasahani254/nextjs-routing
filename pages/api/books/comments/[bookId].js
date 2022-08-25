import {
  connectDb,
  insertDocument,
  getAllDocuments,
} from "../../../../components/helpers/db-utils";

export default async function handler(req, res) {
  const { bookId } = req.query;
  let client;

  try {
    client = await connectDb();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() ||
      !text ||
      !text.trim()
    ) {
      res.status(422).json({ message: "Invalid data" });
      return;
    }

    const newComment = { email, bookId, text, name };
    let result;

    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res
        .status(201)
        .json({ message: "Successfully added !", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting comment failed!" });
    }

    newComment.id = result.insertedId;

    res
      .status(200)
      .json({ message: "Successfully added !", comments: newComment });
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ message: "Success!", comments: documents });
    } catch (error) {
      res.status(500).json({ message: "oops ! comment not loaded !" });
    }
  }

  client.close();
}

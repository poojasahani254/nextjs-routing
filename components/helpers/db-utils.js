import { MongoClient } from "mongodb";

export async function connectDb() {
  return await MongoClient.connect(
      `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.vil2slf.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  );
}

export async function insertDocument(client, collection, document) {
  return await client.db().collection(collection).insertOne(document);
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  return await client
    .db()
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
}

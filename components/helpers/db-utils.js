import { MongoClient } from "mongodb";

export async function connectDb() {
  return await MongoClient.connect(
    "mongodb+srv://dbnextjs-demo:0w4NlQmw6MM7t8Kq@cluster0.e9mvhhd.mongodb.net/books?retryWrites=true&w=majority"
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

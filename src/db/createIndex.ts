import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {};

//@ts-ignore
const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('mydatabase').collection('users');
const cursor = coll.find(filter);
//@ts-ignore
const result = await cursor.toArray();
//@ts-ignore
await client.close();
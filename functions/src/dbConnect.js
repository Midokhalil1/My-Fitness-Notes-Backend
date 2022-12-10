import { MongoClient } from 'mongodb';
// MongoClient- Nodejs library thats handle connecting to and interacting with MongoDB database.
import 'dotenv/config'

export function dbConnect () {
    const client = new MongoClient(process.env.MONGO_URI);
    return client.db("mydatabase");
}


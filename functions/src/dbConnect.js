import { MongoClient } from 'mongodb';

import 'dotenv/config'

export function dbConnect () {
    const client = new MongoClient(process.env.MONGO_URI);
    return client.db("mydatabase");
}

// MongoClient- Nodejs library thats handle connecting to and interacting with MongoDB database.
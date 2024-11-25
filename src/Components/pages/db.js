import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017'; // MongoDB connection URL
const dbName = 'VeteranWebsite'; // Database name

const client = new MongoClient(url);

async function connectToDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);

        // Now you can access collections in your database
        const collection = db.collection('myCollection');
        // Example of finding all documents
        const documents = await collection.find({}).toArray();
        console.log(documents);

    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

connectToDB();

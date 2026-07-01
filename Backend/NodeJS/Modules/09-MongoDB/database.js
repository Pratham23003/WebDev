import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

if (!process.env.DB_URI) {
    throw new Error("DB_URI is missing in .env");
}

console.log(process.env.DB_URI);

async function runGetStarted() {
    const uri = process.env.DB_URI;
    const client = new MongoClient(uri);

    try {
        const database = client.db('sample_mflix');
        const movies = database.collection('movies');

        const query = { title: 'Back to the Future' };
        const movie = await movies.findOne(query);

        console.log(movie);
    } finally {
        await client.close();
    }
}

runGetStarted().catch(console.error);
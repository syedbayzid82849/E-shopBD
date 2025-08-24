import { MongoClient, ServerApiVersion } from 'mongodb';

export const collectionNames = {
    productsCollection: 'products',
    usersCollection: 'users',
};

let client;
let clientPromise;

export default async function dbConnect(collectionName) {
    if (!clientPromise) {
        const uri = process.env.MONGODB_URI;

        client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });

        clientPromise = client.connect();
    }

    // Ensure the client is connected
    await clientPromise;

    return client.db(process.env.DB_NAME).collection(collectionName);
}

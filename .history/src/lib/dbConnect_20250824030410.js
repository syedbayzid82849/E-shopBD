import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNames = {
    productsCollection: "products",
    usersCollection: "users",
};

let client;
let clientPromise;

export default async function dbConnect(collectionName) {
    if (!clientPromise) {
        if (!process.env.MONGODB_URI) {
            throw new Error("Please add your Mongo URI to .env.local");
        }

        client = new MongoClient(process.env.MONGODB_URI, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });

        clientPromise = client.connect();
    }

    // Wait until the client is connected
    await clientPromise;

    if (!process.env.DB_NAME) {
        throw new Error("Please add your DB_NAME to .env.local");
    }

    return client.db(process.env.DB_NAME).collection(collectionName);
}

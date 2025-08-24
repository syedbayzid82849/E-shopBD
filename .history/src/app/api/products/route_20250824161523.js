import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export async function GET() {
    try {
        await client.connect();
        const db = client.db("mydb");
        const products = await db.collection("products").find({}).toArray();
        return new Response(JSON.stringify(products), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    } finally {
        // await client.close();
    }
}

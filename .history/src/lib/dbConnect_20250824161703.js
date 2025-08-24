
export async function GET() {
    try {
        const productsCollection = await dbConnect(collectionNames.productsCollection);
        const products = await productsCollection.find({}).toArray();

        return new Response(JSON.stringify(products), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const productsCollection = await dbConnect(collectionNames.productsCollection);
        const result = await productsCollection.insertOne(body);

        return new Response(JSON.stringify(result), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

// /app/api/products-post/route.js


export async function POST(req) {
    try {
        const body = await req.json();
        console.log("📦 Received Product:", body);

        const result = await dbConnect(collectionNames.productsCollection);
        const productsCollection = result.collection;

        const insertRes = await productsCollection.insertOne(body);

        console.log("✅ Inserted:", insertRes);
        return Response.json(insertRes, { status: 201 });
    } catch (err) {
        console.error("❌ Insert Error:", err);
        return Response.json({ error: err.message }, { status: 500 });
    }
}

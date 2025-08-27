import dbConnect, { collectionNames } from "@/lib/dbConnect";

export async function GET() {
    try {
        const productsCollection = await dbConnect(collectionNames.productsCollection);
        const products = await productsCollection.find({}).toArray();
        console.log(products);

        return Response.json(products, { status: 200 });
    } catch (err) {
        return Response.json({ error: err.message }, { status: 500 });
    }
}


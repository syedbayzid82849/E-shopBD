import dbConnect, { collectionNames } from "@/lib/dbConnect";

export async function GET() {
  try {
    const db = await dbConnect();
    const productsCollection = db.collection(collectionNames.products);
    const products = await productsCollection.find({}).toArray();

    return Response.json(products, { status: 200 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const db = await dbConnect();
    const productsCollection = db.collection(collectionNames.products);
    const result = await productsCollection.insertOne(body);

    return Response.json(result, { status: 201 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

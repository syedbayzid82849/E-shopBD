import dbConnect, { collectionNames } from "@/lib/dbConnect";

export async function GET() {
  try {
    const productsCollection = await dbConnect(collectionNames.productsCollection);
    const products = await productsCollection.find().sort({ createdAt: -1 }).toArray();

    return Response.json(products);
  } catch (error) {
    console.error("❌ API error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), { status: 500 });
  }
}

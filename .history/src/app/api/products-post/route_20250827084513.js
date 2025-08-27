export async function POST(req) {
    try {
        const body = await req.json();
        console.log(body);
        // Auto-generate SKU
        const sku = "SKU-" + Math.floor(100000 + Math.random() * 900000);
        // Auto slug from title
        const slug = body.title
            ? body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") +
            "-" +
            Math.floor(Math.random() * 100)
            : "";
        // Final product object
        const newProduct = {
            sku,
            title: body.title,
            slug,
            category: body.category || "Uncategorized",
            brand: body.brand || "Generic",
            seller: body.seller || { name: "Default Seller" },
            price: {
                currency: "BDT",
                original: body.price ? parseFloat(body.price) : 0,
                current: body.discountPrice ? parseFloat(body.discountPrice) : body.price,
                discountPercent: body.discountPercent || 0,
            },
            stock: body.stock ? parseInt(body.stock) : 0,
            rating: body.rating || { average: 0, count: 0 },
            shipping: body.shipping || { type: "standard", cost: 0 },
            images: body.images || {
                thumbnail: body.thumbnail || "/images/products/default-thumb.jpg",
                gallery: body.gallery || [],
            },
            specs: body.specs || {},
            variants: body.variants || {},
            badges: body.badges || [],
            shortDescription: body.shortDescription || "No short description available.",
            description: body.description || "No detailed description available.",
            reviews: body.reviews || [],
            questions: body.questions || [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            status: "active",
        };
        const productsCollection = await dbConnect(collectionNames.productsCollection);
        const result = await productsCollection.insertOne(newProduct);
        return Response.json(result, { status: 201 });
    } catch (err) {
        return Response.json({ error: err.message }, { status: 500 });
    }
}

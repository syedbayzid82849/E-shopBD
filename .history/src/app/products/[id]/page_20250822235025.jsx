import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

// ⭐ StarRating Component
const StarRating = ({ averageRating, totalStars = 5 }) => {
    return (
        <div className="flex text-yellow-400">
            {Array.from({ length: totalStars }, (_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < averageRating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69l4.16.03c.969.006 1.363 1.288.583 1.838l-3.376 2.45c-.34.246-.48.69-.175 1.09l1.286 3.96c.3.92-.816 1.658-1.662 1.056l-3.376-2.45a1 1 0 00-1.156 0l-3.376 2.45c-.846.602-1.962-.136-1.662-1.056l1.286-3.96c.305-.4.165-.844-.175-1.09L.792 9.453c-.78-.55-.386-1.832.583-1.838l4.16-.03a1 1 0 00.95-.69l1.286-3.96z" />
                </svg>
            ))}
        </div>
    );
};

export default async function ProductDetailPage({ params }) {
    const { id } = params;

    // MongoDB থেকে product fetch
    const productsCollection = await dbConnect(collectionNames.productsCollection);
    const product = await productsCollection.findOne({ _id: new ObjectId(id) });

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl font-bold">
                ❌ Product Not Found
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
                <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-lg shadow-md">
                    {/* Left: Image Gallery */}
                    <div className="lg:w-1/2 flex flex-col items-center">
                        <div className="w-full aspect-square relative mb-4">
                            <Image
                                src={product.images?.[0] || product.thumbnail || "/public/assets/bg-hero.png"}
                                alt={product.title}
                                width={600}
                                height={600}
                                className="rounded-lg object-cover w-full h-full border-2 border-black"
                            />
                        </div>
                        <div className="flex gap-2 justify-center flex-wrap">
                            {product.images?.map((img, index) => (
                                <Image
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={80}
                                    height={80}
                                    className="w-20 h-20 rounded-lg border cursor-pointer object-cover"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="lg:w-1/2">
                        {/* Badges */}
                        <div className="flex gap-2 mb-3">
                            {product.badges?.map((badge, i) => (
                                <span
                                    key={i}
                                    className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                            {product.title}
                        </h1>
                        <p className="text-sm text-gray-500 mb-4">{product.shortDescription}</p>

                        {/* Rating */}
                        <div className="flex items-center mb-4">
                            <StarRating averageRating={product.rating?.average || 0} />
                            <span className="ml-2 text-sm text-gray-600">
                                ({product.rating?.count || 0} reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center space-x-4 mb-4">
                            <span className="text-3xl font-extrabold text-red-600">
                                ৳{product.price?.current}
                            </span>
                            <span className="text-lg text-gray-400 line-through">
                                ৳{product.price?.original}
                            </span>
                            <span className="text-lg font-semibold text-green-600">
                                -{product.price?.discountPercent}%
                            </span>
                        </div>

                        {/* Stock & Shipping */}
                        <p className="text-sm text-gray-600 mb-2">Stock: {product.stock} pcs</p>
                        <p className="text-sm text-gray-600 mb-4">
                            Shipping: {product.shipping?.method} ({product.shipping?.fee}৳ fee){" "}
                            {product.shipping?.freeOver
                                ? ` | Free over ৳${product.shipping.freeOver}`
                                : ""}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <button onClick={() => addToCart(product)} className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                                Add to Cart
                            </button>
                            <button className="flex-1 bg-red-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Product Details</h2>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Specifications</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {product.specs &&
                            Object.entries(product.specs).map(([key, value], i) => (
                                <li key={i}>
                                    <span className="font-medium text-gray-800">{key}:</span> {value}
                                </li>
                            ))}
                    </ul>
                </div>

                {/* Reviews */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
                    {product.reviews?.length > 0 ? (
                        product.reviews.map((review, i) => (
                            <div key={i} className="border-t pt-4 border-gray-200">
                                <div className="flex items-center mb-1">
                                    <StarRating averageRating={review.rating} />
                                    <span className="ml-2 text-sm font-semibold text-gray-800">
                                        {review.name}
                                    </span>
                                </div>
                                <p className="text-gray-600">{review.comment}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No reviews yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

import { Db } from 'mongodb';
import React from 'react';

const products = [
    {
        sku: "SKU-100001",
        title: "Memory Foam Pillow",
        price: { current: 21933, discountPercent: 29 },
        thumbnail: "https://images.unsplash.com/photo-1610427976997-7c274d82531d?q=80&w=2070&auto=format&fit=crop",
        badges: ["official-store", "free-delivery"],
        rating: { average: 4, count: 4 }
    },
    {
        sku: "SKU-100002",
        title: "Classic Cotton T‑Shirt",
        price: { current: 16497, discountPercent: 30, original: 23669 },
        thumbnail: "https://images.unsplash.com/photo-1542291026-79e46a78491c?q=80&w=2070&auto=format&fit=crop",
        badges: ["official-store", "hot"],
        rating: { average: 4.3, count: 3 }
    },
    {
        sku: "SKU-100003",
        title: "Smart LED TV 43\" FHD",
        price: { current: 13508, discountPercent: 33, original: 20212 },
        thumbnail: "https://images.unsplash.com/photo-1571176288869-703348c4547c?q=80&w=2070&auto=format&fit=crop",
        badges: ["best-seller", "hot"],
        rating: { average: 5.0, count: 2 }
    },
    {
        sku: "SKU-100004",
        title: "Premium Basmati Rice 5kg",
        price: { current: 4455, discountPercent: 21, original: 5607 },
        thumbnail: "https://images.unsplash.com/photo-1542838132-92c90c33a92b?q=80&w=2070&auto=format&fit=crop",
        badges: ["best-seller", "free-delivery"],
        rating: { average: 4.5, count: 2 }
    },
    {
        sku: "SKU-100005",
        title: "FastCharge Power Bank 20000mAh",
        price: { current: 15664, discountPercent: 28, original: 21768 },
        thumbnail: "https://images.unsplash.com/photo-1550529555-ff3d0859c836?q=80&w=2070&auto=format&fit=crop",
        badges: ["hot", "official-store"],
        rating: { average: 4.7, count: 3 }
    },
    {
        sku: "SKU-100006",
        title: "LiteBook 14\" Laptop",
        price: { current: 37354, discountPercent: 11, original: 42086 },
        thumbnail: "https://images.unsplash.com/photo-1587829744585-780c103986c7?q=80&w=2070&auto=format&fit=crop",
        badges: ["new", "official-store"],
        rating: { average: 4.5, count: 4 }
    }
];


// একটি ফাংশন যা স্টার রেটিং তৈরি করে
const StarRating = ({ averageRating, totalStars = 5 }) => {
    return (
        <div className="flex text-yellow-400">
            {Array.from({ length: totalStars }, (_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < averageRating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69l4.16.03c.969.006 1.363 1.288.583 1.838l-3.376 2.45c-.34.246-.48.69-.175 1.09l1.286 3.96c.3.92-.816 1.658-1.662 1.056l-3.376-2.45a1 1 0 00-1.156 0l-3.376 2.45c-.846.602-1.962-.136-1.662-1.056l1.286-3.96c.305-.4.165-.844-.175-1.09L.792 9.453c-.78-.55-.386-1.832.583-1.838l4.16-.03a1 1 0 00.95-.69l1.286-3.96z" />
                </svg>
            ))}
        </div>
    );
};

// মূল কম্পোনেন্ট
export default function LatestProducts() {
    const data = dbcollection('products').find().toArray();
    console.log(data);
    return (
        <div className="bg-gray-100 px-4 py-8 mt-16  font-sans max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
                Latest Products
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {products.map((product) => (
                    <div key={product.sku} className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                        {/* ব্যাজ */}
                        <div className="absolute top-2 left-2 flex flex-col space-y-1 z-10">
                            {product.badges.includes("free-delivery") && (
                                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">Free Delivery</span>
                            )}
                            {product.badges.includes("best-seller") && (
                                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">Best Seller</span>
                            )}
                            {product.badges.includes("hot") && (
                                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">Hot</span>
                            )}
                            {product.badges.includes("new") && (
                                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">New</span>
                            )}
                        </div>

                        {/* প্রোডাক্টের ছবি */}
                        <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="p-4 flex flex-col items-start text-left">
                            {/* প্রোডাক্টের টাইটেল */}
                            <h3 className="text-base font-medium text-gray-800 mb-2 truncate w-full">
                                {product.title}
                            </h3>

                            {/* প্রাইস এবং ডিসকাউন্ট */}
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-lg font-bold text-red-600">
                                    ৳{product.price.current}
                                </span>
                                <span className="text-sm text-gray-400 line-through">
                                    ৳{product.price.original}
                                </span>
                                <span className="text-sm font-semibold text-gray-500">
                                    -{product.price.discountPercent}%
                                </span>
                            </div>

                            {/* রেটিং */}
                            <div className="flex items-center text-sm text-gray-500">
                                <StarRating averageRating={product.rating.average} />
                                <span className="ml-1 text-gray-600">({product.rating.count})</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

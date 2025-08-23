import dbConnect from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// ⭐ StarRating component
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

export default async function LatestProducts() {
    const defaultImage = '/default.png'; 
    const productsCollection = await dbConnect('products');
    const products = await productsCollection.find().toArray();

    const latestProducts = products.slice(0, 12);

    return (
        <div className="bg-gray-100 px-4 py-8 mt-16 font-sans ">
            <h2 className="text-xl sm:text-2xl md:text-3xl max-w-7xl mx-auto font-semibold mb-8 text-gray-800">
                Latest Products
            </h2>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {latestProducts.map((product) => (
>
                ))}
            </div>

            {/* View All button */}
            <div className="flex justify-center mt-8">
                <Link href="/products">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                        View All Products
                    </button>
                </Link>
            </div>
        </div>
    );
}

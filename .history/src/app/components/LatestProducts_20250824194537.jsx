"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import defaultImage from "/public/assets/def-pro-img-.png";

const StarRating = ({ averageRating, totalStars = 5 }) => (
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

export default function LatestProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 12));
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-8">Loading products...</p>;

  return (
    <div className="bg-gray-100 px-4 py-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
          Latest Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {products.map((product) => (
            <Link key={product._id} href={`/products/${product._id}`} className="group">
              <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                {/* product image */}
                <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={product.thumbnail || product.image || defaultImage}
                    alt={product.title || "Product"}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover bg-gray-200 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* product info */}
                <div className="p-4 flex flex-col items-start text-left">
                  <h3 className="text-base font-medium text-gray-800 mb-2 truncate w-full">
                    {product.title}
                  </h3>

                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold text-red-600">৳{product.price.current}</span>
                    <span className="text-sm text-gray-400 line-through">৳{product.price.original}</span>
                    <span className="text-sm font-semibold text-gray-500">
                      -{product.price.discountPercent}%
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <StarRating averageRating={product.rating?.average || 0} />
                    <span className="ml-1 text-gray-600">({product.rating?.count || 0})</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/products">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

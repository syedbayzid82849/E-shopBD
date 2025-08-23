import dbConnect from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// StarRating 
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
    const defaultImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAOVBMVEXn5+eXl5fo6OiRkZHr6+uUlJTe3t7MzMzk5OSqqqrFxcXT09Oenp7h4eHW1tbu7u6xsbG8vLykpKQdDd+TAAAFBElEQVR4nO2c6XacMAyFsWxjdgzv/7C9kpl02qaDzTKZH9Jpe9IE8OerzRAzFX2gVVR9nClUrilUrilUrilUrilUrl0ERZdO7TSU9M8GVlXuKrQzUDiXHE1dbNfBDGtcQj27K7hOKeWaaRmM94bNw0wbxguwTkARhdYwkLdsgubt2lXudEgcugDxn36FNB5+a5cuhKVNmnm/9me1OqqUqyLcZX0MNc2ObW6maKyo1Z104UGlXIBGfugaR18px3m4DOxFG8858AAUTpg7FmRJQU3Cw2Lh3zGKWPFUdTiiFDl23TqlugSSZpz6rlu6GqVKNIRWdALrENRijW0bGRYKTRzjBulnh7YG1cQu9Is7zHQACjpZ+Cd1Fhq7IRUDqVTWLqAamcqG41TlUC6AqWUmqPRA4lI1tHFZYo8jJv7WkK7ModYUjlEMRT3SbpXohqNsUmiIXe3mecZfjn2h8pGlalazVKWalUJRBd/YWnQKyWkWvaX6I65RGjisaiavrY2li4hSKAmobpaBJfl9rN1ftZJZWi8+RvWI3sZCqQqh2DG+bdDdXCcyoad8NyJJWE0sKPS0UxlVKdTKzmOmIDohXr4/nx0oUUXIRcTgjVDEmRdn+E6UMOG/wUI1apcfeckVEV9lPboMqoFQcArO4S/MNP//UMcVliuoG71M5C4oKQeR0og706caR6wo+5XrMIGi/CuCcsgp27sUxj7ML89lt3nmpnFFfb8LiuAIM/Dcebxl50SRVTog9++lRKoCKGI/cJigIGIttXuiQ6gPAtVZlJF7oKqm3cKc03233/ICh2s/FzdrhvEmpTjL15FQebha75qD/2StIMpO90BxvbSIJBd8zsIkwUv9bEyGsseg5phyb4YX9yOKL40D14a/RFEvWfTlQ6FgootBgIbDfb8YQlLE3iBBhZuxkqZcAFVz/3UIldwIobA1GGjr23ug+tRief5rVi7JNPgekPNwuAWKqxSGqBApWKFnXXvcbiB4HiWNpgAqdXsuDLbLm7bj2sFKoVX6gkJVkH0MVcuihXMwxziWzCwlPS2Or4daJZYIcW4bl2GUiojbboCm+fHt66C4FJp1m3WXYyPJmqqhtDbserGp3g+ubCjH66MWs+egtRkGV0sP4GYJdbenWLB215G5UK6K8txC6nme1cnVuGkQqC/br6N5UIR7Ep4sOt+8Wp/M+IcZ8x0oQ6WkkHrrv47xu8PtQaWHPYtckRdTLjyFTfjb+i1wYHWToNCJaUw/jNvT0ea0UkSuH9LVpD69SLd/fhM8bVD82MHNYdPqPBSuvTy8gwFoeyZFT7fif/4m+vETXjZPaSLpSUfwl0DJE4N++IrS3Er+db5ApQGo+x1TJ5UiWp6DeG0L7emcp/Q7BwXXPSezeU65DHuc9PSfK6CmF3XosJ2FCnZ/DIVSKIVSKIVSKIVSKIVSKIVSKIVSKIVSKIVSKIVSKIVSKIVSKIVSKIVSKIVSKIVSqM+B2mH6CSg/nNv+dg/U3p7/H3Hf7sbj90NlbG1+P1TGdtq3Q6XX8D4MyoT9jbrvhsoR6u1QskH2w6B81mvTr6HcxVA+752e1/s8r4bKfA94x339pUy+y9vSvQPVtNdJxS/0XAFV0dgan7sB/SWQMe2U+4kFr2OKdw+P9TU2NtkvqeztsqbqBz4U7MinANxuCpVrCpVrCpVrCpVrCpVrCpVrCpVv/7wB9wH2C76cS9o91tZyAAAAAElFTkSuQmCC';
    const productsCollection = await dbConnect('products');
    const products = await productsCollection.find().toArray();

    return (
        <div className="bg-gray-100 px-4 py-8 mt-16 font-sans max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
                Latest Products
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                    >
                        {/* badge */}
                        <div className="absolute top-2 left-2 flex flex-col space-y-1 z-10">
                            {product.badges?.includes("free-delivery") && (
                                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">Free Delivery</span>
                            )}
                            {product.badges?.includes("best-seller") && (
                                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">Best Seller</span>
                            )}
                            {product.badges?.includes("hot") && (
                                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">Hot</span>
                            )}
                            {product.badges?.includes("new") && (
                                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">New</span>
                            )}
                        </div>

                        {/* product image */}
                        <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden  ">
                            <Image
                                src={product.image || defaultImage}
                                alt={product.name}
                                width={300}
                                height={200}
                                className="object-cover rounded-lg"
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
                {/* View All button */}
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

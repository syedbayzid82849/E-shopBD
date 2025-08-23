"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);       // mobile main menu
    const [mobileDrop, setMobileDrop] = useState(false);   // mobile dropdown

    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top bar */}
                <div className="h-16 flex items-center justify-between">
                    {/* Left: Logo */}
                    <Link href="/" className="text-2xl font-bold tracking-tight">
                        {/* Logo */}
                        <a href="/" className=" text-2xl font-bold text-gray-800">
                            <span className="text-blue-600">E</span><span>-shop</span><span className="text-green-600">B</span><span className="text-red-600">D</span>
                        </a>
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
                        <Link href="/products" className="hover:text-blue-600 transition">Products</Link>

                        {/* Desktop dropdown (hover) */}
                        <div className="relative group">
                            <button className="inline-flex items-center gap-1 hover:text-blue-600 transition">
                                Parent
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded-md shadow-lg w-44 py-2">
                                <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Submenu 1</Link>
                                <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Submenu 2</Link>
                            </div>
                        </div>

                        <Link href="/login" className="hover:text-blue-600 transition">Login</Link>
                    </div>

                    {/* Right: CTA (Desktop) */}
                    <div className="hidden lg:block">
                        <Link
                            href="/dashboard/add-product"
                            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            Add Product
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        aria-label="Toggle menu"
                        className="lg:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100"
                        onClick={() => setMenuOpen(v => !v)}
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu panel */}
            {menuOpen && (
                <div className="lg:hidden border-t">
                    <div className="px-4 py-3 space-y-2">
                        <Link href="/" className="block hover:text-blue-600">Home</Link>
                        <Link href="/products" className="block hover:text-blue-600">Products</Link>

                        {/* Mobile dropdown (click-to-toggle) */}
                        <div>
                            <button
                                className="w-full flex items-center justify-between hover:text-blue-600"
                                onClick={() => setMobileDrop(v => !v)}
                            >
                                Parent
                                <svg className={`w-4 h-4 ml-2 transition ${mobileDrop ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {mobileDrop && (
                                <div className="ml-4 mt-2 space-y-1">
                                    <Link href="#" className="block text-gray-700 hover:text-blue-600">Submenu 1</Link>
                                    <Link href="#" className="block text-gray-700 hover:text-blue-600">Submenu 2</Link>
                                </div>
                            )}
                        </div>

                        <Link href="/login" className="block hover:text-blue-600">Login</Link>
                        <Link
                            href="/dashboard/add-product"
                            className="block mt-2 px-4 py-2 rounded-md bg-blue-600 text-white text-center hover:bg-blue-700"
                        >
                            Add Product
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

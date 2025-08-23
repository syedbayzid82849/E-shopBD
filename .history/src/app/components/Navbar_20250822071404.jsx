"use client";
import { useState } from "react";
import NavLink from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md ">
            <div className=" mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    <span className="text-blue-600">E</span>
                    <span>-Shop</span>
                    <span className="text-green-600">B</span>
                    <span className="text-red-600">D</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <NavLink href="/" className="text-gray-700 hover:text-blue-600">
                        Home
                    </NavLink>
                    <NavLink href="/products" className="text-gray-700 hover:text-blue-600">
                        Products
                    </NavLink>
                    <NavLink href="/category" className="text-gray-700 hover:text-blue-600">
                        Category
                    </NavLink>
                    <NavLink href="/about" className="text-gray-700 hover:text-blue-600">
                        About
                    </NavLink>
                </div>

                {/* Right Side */}
                <div className="hidden md:flex">
                    <Link
                        href="/login"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-gray-100 px-4 py-3 space-y-2">
                    <Link href="/" className="block text-gray-700 hover:text-blue-600">
                        Home
                    </Link>
                    <Link href="/category" className="block text-gray-700 hover:text-blue-600">
                        Category
                    </Link>
                    <Link href="/about" className="block text-gray-700 hover:text-blue-600">
                        About
                    </Link>
                    <Link href="/products" className="block text-gray-700 hover:text-blue-600">
                        Products
                    </Link>
                    <Link href="/contact" className="block text-gray-700 hover:text-blue-600">
                        Contact
                    </Link>
                    <Link
                        href="/login"
                        className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </nav>
    );
}

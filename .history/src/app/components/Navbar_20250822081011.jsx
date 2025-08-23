"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navMenu = () => {
        return (
            <>
                <li>
                    <Link href="/" className={isActive("/")}>Home</Link>
                </li>
                <li>
                    <Link href="/about" className={isActive("/\")}>Products</Link>
                </li>
                <li>
                    <Link href="/services" className={isActive("/services")}>Categories</Link>
                </li>
                <li>
                    <Link href="/blogs" className={isActive("/blogs")}>About</Link>
                </li>
                <li>
                    <Link href="/my-bookings" className={isActive("/my-bookings")}>My Bookings</Link>
                </li>

                <li>
                    <Link href="/register" className={isActive("/register")}>Register</Link>
                </li>
                <li>
                    <Link href="/login" className={isActive("/login")}>Login</Link>
                </li>

                {/* {status === "authenticated" ? (
                    <>
                        <li>
                            <Image
                                // src={session?.user?.image}
                                src="/user.png"
                                width={50}
                                height={50}
                                alt="user-logo"
                                className="rounded-full"
                            />
                        </li>
                        <li>Log Out</li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href="/register" className={isActive("/register")}>Register</Link>
                        </li>
                        <li>
                            <Link href="/login" className={isActive("/login")}>Login</Link>
                        </li>
                    </>
                )} */}
            </>
        );
    }

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
                    <Link href="/" className="text-gray-700 hover:text-blue-600">
                        Home
                    </Link>
                    <Link href="/products" className="text-gray-700 hover:text-blue-600">
                        Products
                    </Link>
                    <Link href="/categories" className="text-gray-700 hover:text-blue-600">
                        Category
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-blue-600">
                        About
                    </Link>

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

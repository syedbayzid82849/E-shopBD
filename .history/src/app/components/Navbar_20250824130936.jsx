"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
    const { data: session } = useSession();
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    };

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Left - Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                            E-ShopBD
                        </Link>
                    </div>

                    {/* Middle - Links */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">
                            Home
                        </Link>
                        <Link href="/products" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">
                            Products
                        </Link>
                        <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">
                            Contact
                        </Link>
                    </div>

                    {/* Right - Theme + Auth */}
                    <div className="flex items-center space-x-4">
                        {/* Dark/Light Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                        >
                            {darkMode ? (
                                <SunIcon className="h-5 w-5 text-yellow-400" />
                            ) : (
                                <MoonIcon className="h-5 w-5 text-gray-800" />
                            )}
                        </button>

                        {/* Auth Buttons */}
                        {session ? (
                            <div className="flex items-center space-x-3">
                                <img
                                    src={session.user?.image || "/default-avatar.png"}
                                    alt="profile"
                                    className="w-8 h-8 rounded-full"
                                />
                                <button
                                    onClick={() => signOut()}
                                    className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => signIn()}
                                className="px-3 py-1 rounded bg-indigo-500 text-white hover:bg-indigo-600"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

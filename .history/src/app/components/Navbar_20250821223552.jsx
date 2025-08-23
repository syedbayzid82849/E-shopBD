"use client";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Left Section */}
                    <div className="flex items-center">
                        {/* Mobile Menu Button */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none"
                            >
                                {/* Hamburger Icon */}
                                {!isOpen ? (
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    // Close Icon
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Logo */}
                        <a href="/" className="ml-3 text-2xl font-bold text-gray-800">
                            <span className="text-blue-600">E</span>
                            <span>-shop</span>
                            <span className="text-green-600">B</span>
                            <span className="text-red-600">D</span>
                        </a>
                    </div>

                    {/* Center Menu (Desktop) */}
                    <div className="hidden lg:flex space-x-6 items-center">
                        <a href="#" className="text-gray-700 hover:text-blue-600">Item 1</a>

      {/* Dropdown */}
      <div className="relative group">
        <button className="text-gray-700 hover:text-blue-600">Parent</button>
        <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-40 z-50">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Submenu 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Submenu 2
          </a>
        </div>
      </div>


                        <a href="#" className="text-gray-700 hover:text-blue-600">Item 3</a>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center">
                        <a
                            href="#"
                            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
                        >
                            Button
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (sm screens only) */}
            {isOpen && (
                <div className="lg:hidden px-4 pb-3 space-y-2 bg-white shadow-md">
                    <a href="#" className="block text-gray-700 hover:text-blue-600">Item 1</a>

                    <details className="block">
                        <summary className="cursor-pointer text-gray-700 hover:text-blue-600">Parent</summary>
                        <div className="pl-4 mt-1 space-y-1">
                            <a href="#" className="block text-gray-600 hover:text-blue-500">Submenu 1</a>
                            <a href="#" className="block text-gray-600 hover:text-blue-500">Submenu 2</a>
                        </div>
                    </details>

                    <a href="#" className="block text-gray-700 hover:text-blue-600">Item 3</a>
                </div>
            )}
        </nav>
    );
}

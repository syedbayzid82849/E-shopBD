"use client";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">E</span>
            <span>-Shop</span>
            <span className="text-green-600">B</span>
            <span className="text-red-600">D</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                Categories ⬇️
              </button>
              {dropdownOpen && (
                <ul className="absolute -top-32 right-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Electronics</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Clothes</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Shoes</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Accessories</a></li>
                </ul>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <a href="#" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-300">Login</a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {!mobileOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
          <details className="group">
            <summary className="px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100">Categories ⬇️</summary>
            <div className="pl-4">
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Electronics</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Clothes</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Shoes</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Accessories</a>
            </div>
          </details>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
          <a href="#" className="block px-4 py-2 mt-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-300">Login</a>
        </div>
      )}
    </nav>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/dashboard" },
    { name: "Add Product", href: "/dashboard/add-products" },
    { name: "My Products", href: "/dashboard/my-products" },
    { name: "Profile", href: "/dashboard/profile" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-60 transform bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:flex md:flex-col`}
      >
        {/* Close button on small screens */}
        <div className="flex items-center justify-between p-3 md:hidden">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
            ✕
          </button>
        </div>

        {/* Sidebar content */}
        <div className="flex flex-col h-full p-3 pt-0 md:pt-3">
          {/* Search */}
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" className="p-2 focus:outline-none focus:ring">🔍</button>
            </span>
            <input
              type="search"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-2 text-sm rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>

          {/* Menu */}
          <div className="flex-1 overflow-y-auto">
            <ul className="space-y-2 text-sm">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`block w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive ? "bg-blue-500 text-white dark:bg-blue-600" : ""
                        }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Profile */}
          <div className="flex items-center mt-6 space-x-3">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt="User"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-sm font-semibold">Leroy Jenkins</h2>
              <a href="#" className="text-xs text-blue-500 hover:underline">View profile</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Right side */}
      <div className="flex-1 flex flex-col ml-0 md:ml-60">
        {/* Top bar for mobile */}
        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 md:hidden">
          <button
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>

        {/* Main content */}
      </div>
    </div>
  );
}

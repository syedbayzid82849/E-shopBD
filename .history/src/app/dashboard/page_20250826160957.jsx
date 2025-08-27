"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/dashboard" },
    { name: "Add Product", href: "/dashboard/add-product" },
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
                      className={`block w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${
                        isActive ? "bg-blue-500 text-white dark:bg-blue-600" : ""
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
        <div className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>

          {/* Example cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {[1, 2, 3].map((card) => (
              <div key={card} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Card {card}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Some example content for card {card}.
                </p>
              </div>
            ))}
          </div>

          {/* Example table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="p-2 border-b border-gray-300 dark:border-gray-600">ID</th>
                  <th className="p-2 border-b border-gray-300 dark:border-gray-600">Name</th>
                  <th className="p-2 border-b border-gray-300 dark:border-gray-600">Status</th>
                  <th className="p-2 border-b border-gray-300 dark:border-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((row) => (
                  <tr key={row} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="p-2 border-b border-gray-300 dark:border-gray-600">{row}</td>
                    <td className="p-2 border-b border-gray-300 dark:border-gray-600">Item {row}</td>
                    <td className="p-2 border-b border-gray-300 dark:border-gray-600">Active</td>
                    <td className="p-2 border-b border-gray-300 dark:border-gray-600">
                      <button className="px-2 py-1 text-xs text-white bg-green-500 rounded hover:bg-green-600">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

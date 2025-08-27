"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();

  // যদি user লগইন না করে থাকে → login page এ redirect হবে
  if (status === "unauthenticated") {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-3">
          <Link href="/dashboard" className="block hover:underline">
            Home
          </Link>
          <Link href="/dashboard/add-product" className="block hover:underline">
            Add Product
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="mt-6 w-full bg-red-500 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}

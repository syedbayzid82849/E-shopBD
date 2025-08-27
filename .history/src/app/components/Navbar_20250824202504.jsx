"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const session = useSession();


    const isActive = (path) =>
        pathname === path
            ? "bg-gray-100 text-orange-500 font-semibold"
            : " text-gray-600";

    const navMenu = () => {
        return (
            <>
                <li>
                    <Link href="/" className={isActive("/")}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/products" className={isActive("/products")}>
                        Products
                    </Link>
                </li>
                <li>
                    <Link href="/categories" className={isActive("/categories")}>
                        Categories
                    </Link>
                </li>
                {
                    session && (
                        <li>
                            <Link href="/dashboard" className={isActive("/dashboard")}>
                                Dashboard
                            </Link>
                        </li>
                    )
                }
            </>
        );
    };


    return (
        <div className="navbar bg-white shadow-sm fixed z-50 px-6">
            <div className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black " fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content bg-white  rounded z-50 mt-3 w-52 p-2 shadow"
                    >
                        {navMenu()}
                    </ul>
                </div>
                <a className=" text-xl font-bold">
                    <span className="text-blue-600">E</span>
                    <span className="text-black">-Shop</span>
                    <span className="text-green-600">B</span>
                    <span className="text-red-600">D</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu()}
                </ul>
            </div>
            <div className="navbar-end">
                {session?.status === 'authenticated' ? (
                    <div className="flex items-center space-x-3">
                        <img
                            src={session.user?.image || "https://ibb.co.com/fYF7ppg4"}
                            alt="profile"
                            className="w-8 h-8 rounded-full shadow-lg "
                        />
                        <button
                            onClick={() => signOut()}
                            className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <button
                            onClick={() => signIn()}
                            className="px-3 py-1 rounded bg-indigo-500 text-white hover:bg-indigo-600"
                        >
                            Login
                        </button>
                        <button
                            href="/register"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Get Started
                        </button>
                    </>
                )}

            </div>
        </div>
    );
}

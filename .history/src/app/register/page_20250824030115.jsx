"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Register() {
    const router = useRouter();
    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ username: form.username, email: form.email, password: form.password });
        } catch (err) {
            console.error(err);
            alert("Registration failed. Try again!");
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen py-14 flex items-center justify-center font-sans">
            <div className="w-full md:w-1/3 m-3 p-3 py-8 bg-white shadow-lg rounded-xl space-y-5">
                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Create an Account
                </h1>

                {/* Register Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                            className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Register
                    </button>
                </form>

                {/* Social Logins */}
                <div className="mt-4 space-y-3">
                    <button
                        onClick={() => alert("Google login is not implemented yet")}
                        className="w-full bg-red-500 text-white font-bold py-3 rounded-lg"
                    >
                        Continue with Google
                    </button>
                    <button
                        onClick={() => signIn("github", { callbackUrl: "/" })}
                        className="w-full bg-gray-800 text-white font-bold py-3 rounded-lg"
                    >
                        Continue with GitHub
                    </button>
                </div>

                <p className="text-sm text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}

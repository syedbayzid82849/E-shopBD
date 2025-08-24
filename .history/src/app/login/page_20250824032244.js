"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signIn("credentials", {
            email: form.email,
            password: form.password,
            callbackUrl: "/",
        });
    };

    return (
        <div className="bg-gray-100 min-h-screen py-14 flex items-center justify-center px-4 font-sans">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border text-black rounded-lg"
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
                            className="w-full px-4 py-3 border text-black rounded-lg"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg"
                    >
                        Login
                    </button>
                </form>

                {/* Social Logins */}
                <div className="mt-6 space-y-3">
                    <button
                        onClick={() => signIn("google", { callbackUrl: "/" })}
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
            </div>
        </div>
    );
}

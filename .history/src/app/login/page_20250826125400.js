"use client";

import { signIn, useSession } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
    const session = useSession();
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await signIn("credentials", {
                redirect: false,
                email: form.email,
                password: form.password,
            });

            if (result?.error) {
                toast.error("Invalid email or password");
            } else {
                toast.success("Logged in successfully!");
                window.location.href = "/products"; // ✅ login হলে /products এ যাবে
            }
        } catch (error) {
            console.error("Error signing in:", error);
            toast.error("Something went wrong");
        }
    };

    // ✅ Social login with redirect
    const handleSocialLogin = (providerName) => {
F    };

    console.log(session);

    return (
        <div className="bg-gray-100 min-h-screen py-14 flex items-center justify-center px-4 font-sans text-black">
            <div className="w-full max-w-md p-6 rounded-md shadow bg-gray-50">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>

                {/* Social Login Buttons */}
                <div className="flex flex-col space-y-3 mb-6">

                    <button
                        onClick={() => handleSocialLogin("github")}
                        className="flex items-center justify-center w-full p-3 space-x-2 border rounded-md hover:bg-gray-200"
                    >
                        <p>Login with GitHub</p>
                    </button>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="*****"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />

                    <button type="submit" className="w-full px-4 py-3 font-semibold bg-blue-600 text-white rounded-md">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

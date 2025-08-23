"use client";

import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/public/assets/regi-Lo.json";

export default function Register() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`✅ User Registered: ${form.username} (${form.email})`);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 font-sans">
            <div className="w-full max-w-4xl grid md:grid-cols-2 items-center gap-6 p-8 bg-white shadow-lg rounded-xl">
                {/* Left: Lottie Animation */}
                <div className="hidden md:flex justify-center">
                    <Lottie animationData={animationData} loop={true} className="w-72 h-72" />
                </div>

                {/* Right: Register Form */}
                <div className="w-full space-y-5">
                    <h1 className="text-3xl font-bold text-center text-gray-800">Create an Account</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                placeholder="Enter your username"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
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

                    <p className="text-sm text-center text-gray-600">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-600 underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

"use client";

import { signIn } from "next-auth/react";
import React from "react";
import React, { useState } from "react";


export default function Register() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = form.name;
        const email = form.email;
        const password = form.password;
        console.log({ name, email, password });
    }
    const handleSocialLogin = (providerName) => {
        signIn(providerName);
    };

    return (
        <div className="bg-gray-100 min-h-screen py-14 flex items-center justify-center px-4 font-sans text-black">
            <div className="w-full max-w-md p-6 rounded-md shadow bg-gray-50">
                <h2 className="mb-3 text-3xl font-semibold text-center">Create an account</h2>
                <p className="text-sm text-center mb-6">
                    Do not have an account?{" "}
                    <a href="/register" className="text-blue-600 hover:underline">
                        Sign up here
                    </a>
                </p>

                {/* Social Login Buttons */}
                <div className="flex flex-col space-y-3 mb-6">
                    <button
                        onClick={() => handleSocialLogin("Google")}
                        className="flex ite`ms-center justify-center w-full p-3 space-x-2 border rounded-md hover:bg-gray-200"
                    >
                        <p>Login with Google</p>
                    </button>
                    <button
                        onClick={() => handleGitHubSignIn()}
                        className="flex items-center justify-center w-full p-3 space-x-2 border rounded-md hover:bg-gray-200"
                    >
                        <p>Login with GitHub</p>
                    </button>
                </div>

                <div className="flex items-center w-full my-4">
                    <hr className="w-full border-gray-300" />
                    <p className="px-3 text-gray-500">OR</p>
                    <hr className="w-full border-gray-300" />
                </div>

                {/* Email/Password Login Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm">Email address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*****"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-3 font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}

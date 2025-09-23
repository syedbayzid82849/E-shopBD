"use client";
import React from 'react'

export default function RegisterForm() {
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                />

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

                <button
                    type="submit"
                    className="w-full px-4 py-3 font-semibold bg-blue-600 text-white rounded-md"
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}

"use client";
import registerUser from "@/app/actions/auth/registerUser";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";


export default function Register() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    // handle input change
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const toastId = toast.loading("Creating your account...");

        try {
            const res = await registerUser(form);

            if (res && res._id) {
                toast.success("Registration successful!", { id: toastId });

                // চাইলে register এর পরেই auto login করতে পারো
                await signIn("credentials", {
                    redirect: false,
                    email: form.email,
                    password: form.password,
                });

                router.push("/products");
            } else {
                toast.error("User already exists!", { id: toastId });
            }
        } catch (err) {
            toast.error("Something went wrong!", { id: toastId });
        }
    };

    // ✅ Social login with redirect
    const handleSocialRegistration = (providerName) => {
        signIn(providerName, { callbackUrl: "/products" });
    };
    return (
        <div className="bg-gray-100 min-h-screen py-14 flex items-center justify-center px-4 font-sans text-black">
            <div className="w-full max-w-md p-6 rounded-md shadow bg-gray-50">
                <h2 className="mb-3 text-3xl font-semibold text-center">
                    Create an account
                </h2>
                <p>
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600">
                        Log in
                    </a>
                </p>

                {/* Social Login Buttons */}
                <div className="flex flex-col space-y-3 mb-6">
                    <button
                        onClick={() => handleSocialRegistration("github")}
                        className="flex items-center justify-center w-full p-3 space-x-2 border rounded-md hover:bg-gray-200"
                    >
                        <p>Login with GitHub</p>
                    </button>
                </div>

                {/* Form */}
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
        </div>
    );
}

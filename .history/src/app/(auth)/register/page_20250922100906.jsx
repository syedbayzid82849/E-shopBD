"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import RegisterForm from "./RegisterForm";

export default function Register() {
    // React Hook for form state
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
        console.log("Form Data:", form); // ✅ Console এ ডাটা দেখা যাবে
        toast.success("Form submitted! (check console)");
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
<RegisterForm
            </div>
        </div>
    );
}

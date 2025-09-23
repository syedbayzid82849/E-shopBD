"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function Login() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // ✅ Login Submit
    const onSubmit = async (data) => {
        const { email, password } = data;
        try {
            await signIn('credentials', { email, password });
            router.push("/")
toast.
        } catch (error) {
            toast.error(error)
        }
    };

    // ✅ Social login
    const handleSocialLogin = (providerName) => {
        signIn(providerName, { callbackUrl: "/products" });
    };

    return (
        <div className="bg-gray-100 min-h-screen py-14 flex items-center justify-center px-4 font-sans text-black">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="w-full max-w-md p-6 rounded-md shadow bg-gray-50">
                <h2 className="mb-3 text-3xl font-semibold text-center">
                    Login to your account
                </h2>
                <p>
                    {"Don't have an account? "}
                    <a href="/register" className="text-blue-600">
                        Sign up
                    </a>
                </p>

                {/* Social Login */}
                <div className="flex flex-col space-y-3 mb-6">
                    <button
                        onClick={() => handleSocialLogin("github")}
                        className="flex items-center justify-center w-full p-3 space-x-2 border rounded-md hover:bg-gray-200"
                    >
                        <p>Login with GitHub</p>
                    </button>
                </div>

                {/* Login Form with React Hook Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            className="w-full px-3 py-2 border rounded-md"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <input
                            type="password"
                            placeholder="*****"
                            autoComplete="current-password"
                            className="w-full px-3 py-2 border rounded-md"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 5,
                                    message: "Password must be at least 5 characters",
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full px-4 py-3 font-semibold bg-blue-600 text-white rounded-md"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

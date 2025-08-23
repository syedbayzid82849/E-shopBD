"use server";
import bcrypt from "bcrypt";
import { collectionNames } from "@/app/"; // adjust import to your DB helper
import dbConnect from "";

export const loginUser = async ({ email, password }) => {
    const usersCollection = dbConnect(collectionNames.usersCollection);
    const user = await usersCollection.findOne({ email });
    if (!user) return null;

    // Correct order: plain password first
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    // Return minimal user info for NextAuth session
    return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
    };
};

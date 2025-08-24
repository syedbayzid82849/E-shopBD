"use server";

import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
    const { email, password } = payload;

    // get users collection
    const usersCollection = await dbConnect(collectionNames.usersCollection);

    // find user by email
    const user = await usersCollection.findOne({ email });
    if (!user) return null;

    // validate password (note: first arg = plain text, second = hashed password)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    // don’t return password in response
    const { password: _, ...userWithoutPassword } = user;

    return userWithoutPassword;
};

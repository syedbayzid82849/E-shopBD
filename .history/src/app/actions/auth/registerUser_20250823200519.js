"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

const registerUser = async (payload) => {
    const usersCollection = dbConnect(collectionNames.usersCollection);

    const {email, password} = payload;

    if

    const user = await usersCollection.findOne({ email });
    if (user) {
        return { error: "User already exists" };
    }
    await usersCollection.insertOne({ email, password });
    return { success: "User registered successfully" };
};

export default registerUser;

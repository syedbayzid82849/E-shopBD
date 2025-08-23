"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

const registerUser = async (payload) => {
    const {email, name, password} = payload;
    const usersCollection = dbConnect(collectionNames.usersCollection);
    const user = await usersCollection.findOne({ email });
    if (user) {
        return { error: "User already exists" };
    }
    await usersCollection.insertOne(payload);
    return { success: "User registered successfully" };
};

export default registerUser;

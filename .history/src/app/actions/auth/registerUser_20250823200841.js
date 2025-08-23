"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
    const usersCollection = dbConnect(collectionNames.usersCollection);

    // validation 
    const {email, password} = payload;
    if(!email || !password) { return { success: false }; }

    const user = await usersCollection.findOne({ email });
    if (!user) {
    }
    await usersCollection.insertOne({ email, password });
    return { success: "User registered successfully" };
};

export default registerUser;

"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
    const usersCollection = dbConnect(collectionNames.usersCollection);

    const {email, password} = payload;
    if(!email || !password)  return { success: false };
    }  

    const user = await usersCollection.findOne({ email });
    if (user) {
        return { error: "User already exists" };
    }
    await usersCollection.insertOne({ email, password });
    return { success: "User registered successfully" };
};

export default registerUser;

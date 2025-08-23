"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import bcrypt from "bcryptjs"; 

const registerUser = async (payload) => {
    console.log("payload", payload);
    const usersCollection = dbConnect(collectionNames.usersCollection);

    // validation 
    const { email, password } = payload;
    if (!email || !password) {
        return null;
    }

    const user = await usersCollection.findOne({ email });
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10); 
        payload.password = hashedPassword;
        const result = await usersCollection.insertOne(payload);
        result.insertedId
        return { acknowledged, insertedId };
    }
    return null;
};

export default registerUser;

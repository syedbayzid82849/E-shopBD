"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

const registerUser = async (payload) => {
    const {email, name, password} = payload;
    const usersCollection = dbConnect(collectionNames.usersCollection);
    const user = await usersCollection.findOne({ email });
    if (user) {
        throw new Error("User already exists");
    }
    await usersCollection.insertOne(payload);
};

export default registerUser;

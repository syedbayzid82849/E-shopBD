"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

const registerUser = async (payload) => {
    const {email, name, password} = pa
    const usersCollection = dbConnect(collectionNames.usersCollection);
    const user = usersCollection.findOne({ email: payload.email });
    if (user) {
        throw new Error("User already exists");
    }
    await usersCollection.insertOne(payload);
};

export default registerUser;

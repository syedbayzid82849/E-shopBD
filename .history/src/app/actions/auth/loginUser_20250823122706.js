"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
    console.log("Logging in:", { email, password });
    const usersCollection = dbConnect(collectionNames.usersCollection);
    const user = await usersCollection.findOne({ email });
};

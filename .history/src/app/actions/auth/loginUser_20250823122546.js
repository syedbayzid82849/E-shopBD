"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const loginUser = async ({ email, password }) => {
    console.log("Logging in:", { email, password });
const userCollection = dbConnect(collectionNames.usersCollection)
};

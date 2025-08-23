"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

const registerUser = async (payload) => {
    const usersCollection = dbConnect(collectionNames.usersCollection);
    const user = user
};

export default registerUser;

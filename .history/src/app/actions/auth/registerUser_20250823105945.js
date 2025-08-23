"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

const registerUser = async (payload) => {
    const usersCollection = dbConnect(collectionNames.usersCollection);
    const user = usersCollection.fi]
};


export default registerUser;

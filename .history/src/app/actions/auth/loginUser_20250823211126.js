"use server";

import dbConnect from "@/lib/dbConnect";


export const loginUser = async (payload) => {
    const { email, password } = payload;
    console.log("Logging in:", { email, password });
    // const usersCollection = dbConnect(collectionNames.usersCollection);
    // const user = await usersCollection.findOne({ email });
    // if (!user) {
    //     return null;
    // }
    // // Here you would typically compare the password with a hashed password in the database
    // return user;
};

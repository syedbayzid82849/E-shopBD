"use server";
import dbConnect from '@/lib/dbConnect';
import React from 'react'

const registerUser = async (payload) => {
    const userCollection = dbConnect(collectionNames.userCollection);

    // validation
    const { email, password } = payload;
    if (!email || !password) return null;

    const result = await userCollection.insertOne(payload);
    return result;

};

export default registerUser;

// import dbConnect, { collectionNames } from "@/lib/dbConnect";
// import bcrypt from "bcryptjs";

// const registerUser = async (payload) => {
//     console.log("payload", payload);

//     const usersCollection = await dbConnect(collectionNames.usersCollection);


//     const user = await usersCollection.findOne({ email });
//     if (user) return null; // user already exists

//     // hash password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     payload.password = hashedPassword;

//     // insert user
//     const result = await usersCollection.insertOne(payload);

//     return {
//         ...payload,
//         _id: result.insertedId.toString(),
//     };
// };

// export default registerUser;

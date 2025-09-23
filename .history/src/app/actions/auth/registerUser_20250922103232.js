"use server";
import React from 'react'

r

// import dbConnect, { collectionNames } from "@/lib/dbConnect";
// import bcrypt from "bcryptjs";

// const registerUser = async (payload) => {
//     console.log("payload", payload);

//     const usersCollection = await dbConnect(collectionNames.usersCollection);

//     // validation
//     const { email, password } = payload;
//     if (!email || !password) return null;

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

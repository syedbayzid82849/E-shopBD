"use server";
import dbConnect, { collectionNames } from '@/lib/dbConnect';
import React from 'react'
import bcrypt from "bcryptjs";

const registerUser = async (payload) => {
    const userCollection =await dbConnect(collectionNames.usersCollection);

    // validation
    const { email, password } = payload;
    if (!email || !password) return null;

    const user = await userCollection.findOne({email});
    if (!user) {
        const result = await userCollection.insertOne(payload);
        const {_id, acknowledged}=result;
        return {}
    }
    return null;

};

export default registerUser;

// import dbConnect, { collectionNames } from "@/lib/dbConnect";

// const registerUser = async (payload) => {
//     console.log("payload", payload);

//     const usersCollection = await dbConnect(collectionNames.usersCollection);




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

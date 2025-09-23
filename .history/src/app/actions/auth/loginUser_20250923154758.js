"use server";
import dbConnect, { collectionNames } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {

    const { email, password } = payload;
    console.log('loginUser component', email, password);

    const usersCollection = await dbConnect(collectionNames.usersCollection);

    const user = await usersCollection.findOne({ email });
    if (!user) return null;

    const isPasswordValid = await bcrypt.compare(user.password, password);
    if (!isPasswordValid) return null;

    // // remove password before returning
    // const { password: _, ...userWithoutPassword } = user;

    // return userWithoutPassword;
};

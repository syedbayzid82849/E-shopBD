"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
    const usersCollection = dbConnect(collectionNames.usersCollection);

    // validation 
    const {email, password} = payload;
    if(!email || !password) { return { success: false }; }

    const user = await usersCollection.findOne({ email });
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = aw
        await usersCollection.insertOne({ email, password: hashedPassword });
        return { success: "User registered successfully" };
    }
    return { success: false };
};

export default registerUser;

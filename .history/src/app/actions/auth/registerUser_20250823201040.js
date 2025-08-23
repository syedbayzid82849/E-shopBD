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
        pa
        const result = await usersCollection.insertOne({ email, password: hashedPassword });
        if (result.acknowledged) {
            return { success: "User registered successfully" };
        }
    }
    return { success: false };
};

export default registerUser;

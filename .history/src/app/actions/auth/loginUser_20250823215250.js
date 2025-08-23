"use server";

export const loginUser = async (payload) => {
    const { email, password } = payload;
    const usersCollection = dbConnect(collectionNames.usersCollection);
    const user = await usersCollection.findOne({ email });
    if (!user) return null;
    const isPasswordValid = await bcrypt.compare(user.password, password);
    if (!isPasswordValid) return null;
    return user;
};

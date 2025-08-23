"use server";

export const loginUser = async (payload) => {
    const { email, password } = payload;
    const usersCollection = dbConnect(collectionNames.usersCollection);
    const user = await usersCollection.findOne({ email });
    if (!user) {
        return null;
}
    return user;
};

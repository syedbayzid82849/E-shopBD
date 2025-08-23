import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// Optional: Google login চাইলে আনকমেন্ট করো
// import Google from "next-auth/providers/google";

export const authOptions = {
    session: { strategy: "jwt" as const },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter Email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                // ✅ ডেমো লজিক (ইচ্ছামতো বদলে ডাটাবেস/এপিআই কল করো)
                if (
                    credentials.email === "test@demo.com" &&
                    credentials.password === "123456"
                ) {
                    return { id: "1", name: "Demo User", email: "test@demo.com" };
                }
                return null;
            },
        }),

        // ✅ Google login চাইলে এই ব্লকটা অন করো
        // Google({
        //   clientId: process.env.GOOGLE_CLIENT_ID!,
        //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        // }),
    ],
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

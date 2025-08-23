import NextAuth from "next-auth"

const handler = NextAuth({
    export const authOptions = {
        // Configure one or more authentication providers
        providers: [
            GithubProvider({
                clientId: process.env.GITHUB_ID,
                clientSecret: process.env.GITHUB_SECRET,
            }),
            // ...add more providers here
        ],

    })

export { handler as GET, handler as POST }
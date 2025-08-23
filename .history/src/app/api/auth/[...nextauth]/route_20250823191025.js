import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log("Credentials:", credentials)
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        if (user) return user
        return null
      }
    })
  ],
  pages: {
    signIn: "/login"
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

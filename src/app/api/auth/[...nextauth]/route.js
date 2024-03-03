import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { logIn } from '@/api/LanieApi';

export const authOptions = {
    pages: {
        signIn: '/login'
    },
    providers: [
        Credentials({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                try {
                    const { email, password } = credentials;

                    const res = await logIn({
                        email: email,
                        password: password
                    })

                    if (res.error) {
                        return null
                    }

                    return res.data
                } catch (error) {
                    throw new Error(error);
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
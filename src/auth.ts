import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./db/db"
import { users } from "./db/schema"
import { eq } from "drizzle-orm"


// This is the configuration for NextAuth.js
// It is used to configure the authentication providers and callbacks
// It is used to configure the session and JWT tokens
// It is used to configure the pages and events


export const { auth, handlers: { GET, POST }, signIn, signOut } = NextAuth({
    callbacks: {

        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }



            return session
        },

        async jwt({ token }) {
            if (!token.sub) return token;

            const user = await db.query.users.findFirst({
                where: eq(users.id, token.sub)
            })
            if (!user) return token;

            token.phoneNumber = user.phoneNumber;
            return token
        }
    },
    adapter: DrizzleAdapter(db),
    session: {
        strategy: "jwt", maxAge: 7 * 24 * 60 * 60
    }, // 7 days 
    pages: {

        signIn: '/login',
        signOut: '/logout',
        error: '/login'
    },
    ...authConfig
})
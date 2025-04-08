import type { NextAuthConfig } from "next-auth"
import Credentials from 'next-auth/providers/credentials'
import { z } from "zod"
import { db } from "./db/db"
import { eq } from "drizzle-orm"
import bcrypt from "bcryptjs"
import { users } from "./db/schema"

const CredentialsSchema = z.object({
    mobileNumber: z.string(),
    password: z.string(),
})

// This is the configuration for NextAuth.js
// It is used to configure the authentication providers and callbacks
// It is used to configure the session and JWT tokens
// It is used to configure the pages and events


export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = CredentialsSchema.safeParse(credentials);
                if (validatedFields.success) {
                    const { mobileNumber, password } = validatedFields.data

                    const user = await db.query.users.findFirst({
                        where: eq(users.phoneNumber, mobileNumber)
                    })

                    if (!user || !user.password) return null

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password,
                    );


                    if (passwordsMatch) return user
                }
                return null;
            }
        })
    ]

} satisfies NextAuthConfig
import { db } from "@/db/db";
import { Hono } from "hono";
import { zValidator } from '@hono/zod-validator'
import { insertUserSchema, users } from "@/db/schema";
import { HTTPException } from 'hono/http-exception'
import { customAlphabet } from "nanoid";
import { eq } from "drizzle-orm";
import bcrypt from 'bcryptjs';


const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 7); // 7-character ID


// Define the route for sign-up
// This route handles the sign-up process for users
// It validates the request body using Zod schema and inserts a new user into the database
// It also checks if the user already exists based on the phone number
// and hashes the password before storing it in the database
// If the user is created successfully, it returns a success response with the new user data
// If an error occurs, it returns an appropriate error response
// and logs the error to the console


const app = new Hono()
    .post(
        "/",
        zValidator(
            "json",
            insertUserSchema.omit({
                id: true,
                createdAt: true,

                isActive: true,
            })
        ),
        async (c) => {
            const userData = c.req.valid("json");

            console.log("userData", userData);

            try {
                // Check if user already exists (assuming phone number is unique)
                // This query checks if there is any user in the database with the same phone number
                // If a user is found, it means the phone number is already registered
                // and an error is thrown to indicate that the user already exists
                // The eq function is used to compare the phone number in the database with the provided phone number
                const existinguser = await db.query.users.findFirst({
                    where: eq(users.phoneNumber, userData.phoneNumber),
                });


                // If an existing user is found, throw an error with a message indicating that the user already exists
                // This prevents duplicate registrations with the same phone number
                // and ensures that each user has a unique phone number in the system
                // The error is thrown as an HTTPException with a 400 status code
                // and a message indicating the reason for the error
                // This helps to provide clear feedback to the client about the registration process
                if (existinguser) {
                    throw new HTTPException(400, { message: "user already exists" });
                }

                // Hash the password before storing it
                // Use bcrypt to hash the password with a salt rounds of 10
                // This will generate a secure hash for the password
                // The hashed password will be stored in the database instead of the plain text password
                // This is important for security reasons, as it prevents storing plain text passwords
                // in the database, making it harder for attackers to retrieve user passwords
                // and gain unauthorized access to user accounts
                const hashedPassword = await bcrypt.hash(userData.password, 10);


                // Insert the new user into the database
                // The insert function is used to add a new user record to the database
                // The values function specifies the values to be inserted into the database
                // The id is generated using the nanoid function to create a unique ID for the user
                // The userData object contains the other user details such as phone number, name, etc.

                const newuser = await db
                    .insert(users)
                    .values({
                        id: `user-${nanoid()}`,
                        ...userData,
                        password: hashedPassword,
                    })
                    .returning();

                return c.json({ success: true, data: newuser[0], message: "user created successfully" });
            } catch (error) {
                console.error("Error creating user:", error);
                throw new HTTPException(500, {
                    message: error instanceof Error ? error.message : "Internal Server Error",
                });
            }
        }
    )


export default app;

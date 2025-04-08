import { createInsertSchema } from "drizzle-zod"
import { pgTable, text, timestamp, varchar, boolean } from "drizzle-orm/pg-core";


// This is the schema for the database
// It is used to create the tables in the database
// It is used to define the types of the columns in the tables
// It is used to define the relationships between the tables


// Users Table
export const users = pgTable('users', {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: varchar("name", { length: 255 }).notNull(),
    phoneNumber: varchar("phone_number", { length: 10 }).notNull().unique(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    isActive: boolean("is_active").default(true).notNull(),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users);
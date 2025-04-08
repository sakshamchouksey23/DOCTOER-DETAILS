import { defineConfig } from 'drizzle-kit';
import { config } from "dotenv"

config({ path: ".env.local" })

// This is the configuration for drizzle-kit
// It is used to generate the migrations and the schema for the database
// It is used to generate the types for the database


export default defineConfig({
    schema: './src/db/schema.ts',
    out: './supabase/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    verbose: true,
    strict: true,
});

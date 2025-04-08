
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from "./schema";

//  this is the connection string for the database
//  it is stored in the environment variable DATABASE_URL
//  it is used to connect to the database
//  it is a Postgres database
//  it is used to store the data for the application

// our database is in supabase
//  and we are using the connection string provided by supabase

// why supabase?
//  because it is a free postgres database that is easy to use
//  and it is easy to set up and use with nextjs 
//  and it is easy to use with typescript

const connectionString = process.env.DATABASE_URL!;
const client = postgres(connectionString as string);

export const db = drizzle(client, {
    schema,
});
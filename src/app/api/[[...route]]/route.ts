
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import signUp from './sign-up'
export const runtime = 'nodejs'

const app = new Hono().basePath('/api')



// eslint-disable-next-line @typescript-eslint/no-unused-vars
//  this is the main entry point for the app
//  and it will handle all the routes defined in the app
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
    .route("/signUp", signUp)


export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;

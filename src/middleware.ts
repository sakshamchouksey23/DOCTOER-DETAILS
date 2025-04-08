import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { DEFAULT_APP_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } from '@/routes'

const { auth } = NextAuth(authConfig)


// This middleware is used to protect the application routes
// It checks if the user is authenticated and redirects to the login page if not
// It uses the auth function from the auth module to check the session
// It uses the redirect function from next/navigation to redirect the user to the login page
// It uses the DEFAULT_APP_LOGIN_REDIRECT constant to redirect the user to the default page after login
// It uses the apiAuthPrefix constant to allow API auth routes without authentication


export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname) || nextUrl.pathname.startsWith('/invoice/');;
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)




    // Allow API auth routes without authentication
    if (isApiAuthRoute) {
        return undefined;
    }

    if (nextUrl.pathname.startsWith('/api/signUp')) {
        return undefined;
    }
    if (nextUrl.pathname.startsWith('/api/invoice')) {
        return undefined;
    }

    // If logged in and trying to access auth routes (login/signup), redirect to default page
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_APP_LOGIN_REDIRECT, nextUrl))
        }
        return undefined;
    }

    // If not logged in and not on a public route, redirect to login
    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/login", nextUrl))
    }

    return undefined;
})

// Middleware configuration remains the same
export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
}
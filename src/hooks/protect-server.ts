import { auth } from "@/auth";
import { redirect } from "next/navigation";

/**
 * Protects the server by checking if the user is authenticated.
 * If not, it redirects to the login page.
 *
 * @returns {Promise<void>} A promise that resolves when the check is complete.
 */
// This function is used to protect server routes in Next.js applications
// It checks if the user is authenticated and redirects to the login page if not
// It uses the auth function from the auth module to check the session
// It uses the redirect function from next/navigation to redirect the user to the login page

export const protectServer = async () => {
    const session = await auth();
    if (!session) {
        redirect("/login");
    }
}
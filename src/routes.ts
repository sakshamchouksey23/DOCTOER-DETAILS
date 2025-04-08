
/**
 * Routes that will be available to public
 * These routes will not require authentication
 * @type {string[]}
 */
export const publicRoutes = ['/']

/**
 * Routes that will be available to authenticated users only
 * These routes will require authentication
 * @type {string[]}
 */
export const authRoutes = ['/login', '/signup']

/**
 * Routes that will be available to authenticated users only
 * Routes are used for the api authentication purposes
 * @type {string[]}
 */
export const apiAuthPrefix = '/api/auth'
export const signupApiRoute = 'api/signUp'
export const DEFAULT_APP_LOGIN_REDIRECT = '/doctors-details' 

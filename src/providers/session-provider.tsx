'use client';

import { SessionProvider } from 'next-auth/react';

interface ProviderProps {
	children: React.ReactNode;
}

/**
 * AuthSessionProvider is a wrapper for the NextAuth.js SessionProvider.
 * It provides session management for the application.
 *
 * @param {ProviderProps} props - The properties for the provider.
 * @returns {JSX.Element} The AuthSessionProvider component.
 */
// This component is used to wrap the application with the NextAuth.js SessionProvider
// It provides session management for the application
// It uses the SessionProvider from next-auth/react to provide session management

export function AuthSessionProvider({ children }: ProviderProps) {
	return <SessionProvider>{children}</SessionProvider>;
}

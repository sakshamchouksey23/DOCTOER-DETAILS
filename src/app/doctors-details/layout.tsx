import React from 'react';
import { QueryProvider } from '@/providers/query-provider';
import { AuthSessionProvider } from '@/providers/session-provider';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// Check if the user is authenticated
	const session = await auth();

	// Check if the session is valid and if the user is authenticated
	// If not, redirect to the login page
	if (!session || !session.user) {
		redirect('/login');
	}

	//  authsessionprovider is used to provide the session to the app
	//  queryprovider is used to provide the query client to the app for data fetching and caching
	return (
		<AuthSessionProvider>
			<QueryProvider>
				<>{children}</>
			</QueryProvider>
		</AuthSessionProvider>
	);
}

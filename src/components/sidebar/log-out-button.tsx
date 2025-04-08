'use client';

import React from 'react';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

// This component is used to log out the user from the application
// It uses the next-auth library to handle the sign out process
// The button is styled using Tailwind CSS classes
// The button is positioned at the top right corner of the screen
const LogOutButton = () => {
	return (
		<div className='relative'>
			<Button
				size={'sm'}
				className='bg-pink-600 hover:bg-pink-700 text-white top-4 right-4'
				onClick={() => signOut({ callbackUrl: '/login' })}
			>
				<LogOut />
				<span className=''>Log out</span>
			</Button>
		</div>
	);
};

export default LogOutButton;

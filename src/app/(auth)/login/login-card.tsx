'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type React from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Phone, TriangleAlert, HeartPulse } from 'lucide-react';

import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const LoginCard = () => {
	const [mobileNumber, setMobileNumber] = useState('');
	const [password, setPassword] = useState('');
	const [pending, startTransition] = useTransition();
	const searchParams = useSearchParams();
	const error = searchParams.get('error');
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		startTransition(() => {
			// Sign in with credentials using mobile number and password provided by next-auth
			// This will call the credentials provider in [...nextauth].ts api
			signIn('credentials', {
				mobileNumber,
				password,
			});
		});
	};

	// Toggle password visibility
	const toggleVisibility = () => setIsVisible((prevState) => !prevState);
	return (
		<div className='w-full px-4'>
			<Card
				className={cn(
					'max-w-[350px] mx-auto w-full border-pink-200 bg-white/90 shadow-lg',
					!!error && 'border-rose-500',
				)}
			>
				<CardHeader className='bg-gradient-to-r from-pink-50 to-pink-100 rounded-t-lg pb-4'>
					<div className='flex items-center justify-center mb-2'>
						<HeartPulse className='h-8 w-8 text-pink-600 mr-2' />
					</div>
					<CardTitle className='text-center text-pink-800'>Login</CardTitle>
					<CardDescription className='text-center text-pink-600'>
						Access your breast cancer specialist account
					</CardDescription>
				</CardHeader>
				<CardContent className='w-full flex flex-col gap-4 pb-6 pt-6'>
					<form onSubmit={onSubmit} className='w-full flex flex-col gap-4'>
						<div className='w-full flex flex-col gap-2'>
							<Label htmlFor='phone' className='text-pink-700'>
								Phone Number
							</Label>
							<div className='relative'>
								<Input
									id='phone'
									className='peer pe-9 border-pink-200 focus:border-pink-400 focus:ring-pink-400  text-pink-400'
									placeholder='Enter your mobile number'
									type='tel'
									value={mobileNumber}
									onChange={(e) => setMobileNumber(e.target.value)}
									required
									disabled={pending}
									autoFocus
								/>
								<div className='pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-pink-400 peer-disabled:opacity-50'>
									<Phone size={16} strokeWidth={2} aria-hidden='true' />
								</div>
							</div>
						</div>
						<div className='w-full flex flex-col gap-2'>
							<Label htmlFor='password' className='text-pink-700'>
								Password
							</Label>

							<div className='relative'>
								<Input
									id='password'
									className='pe-9 border-pink-200 focus:border-pink-400 focus:ring-pink-400  text-pink-400'
									placeholder='Enter your password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									type={isVisible ? 'text' : 'password'}
									disabled={pending}
								/>
								<button
									className='absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-pink-400 outline-offset-2 transition-colors hover:text-pink-600 focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-400 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
									type='button'
									onClick={toggleVisibility}
									aria-label={isVisible ? 'Hide password' : 'Show password'}
									aria-pressed={isVisible}
									aria-controls='password'
								>
									{isVisible ? (
										<Eye size={16} strokeWidth={2} aria-hidden='true' />
									) : (
										<EyeOff size={16} strokeWidth={2} aria-hidden='true' />
									)}
								</button>
							</div>
						</div>
						<Button className='w-full mt-2 bg-pink-600 hover:bg-pink-700 text-white' disabled={pending}>
							Login
						</Button>
					</form>
					<div className='w-full text-sm mx-auto flex items-center justify-start text-pink-700'>
						<p>Don&apos;t have an Account:</p>
						<Button variant='link' className='text-pink-600 hover:text-pink-800'>
							<Link href='/signup'>Sign Up</Link>
						</Button>
					</div>

					{!!error && (
						<CardDescription className='text-rose-500 text-center text-base flex items-center justify-center gap-2 bg-rose-50 py-2 rounded-md'>
							<TriangleAlert className='text-rose-500' /> Invalid login, try again
						</CardDescription>
					)}
				</CardContent>
			</Card>
		</div>
	);
};

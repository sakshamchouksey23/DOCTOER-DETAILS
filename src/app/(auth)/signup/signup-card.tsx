'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Mail, Phone, TriangleAlert, User, HeartPulse } from 'lucide-react';

import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const SignupCard = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	const [pending, startTransition] = useTransition();
	const searchParams = useSearchParams();
	const error = searchParams.get('error');
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const toggleVisibility = () => setIsVisible((prevState) => !prevState);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		startTransition(async () => {
			// Create a data object with the form values
			// This will be sent to the server for signup
			// and authentication
			// using next-auth credentials provider
			const data = {
				name,
				email,
				phoneNumber,
				password,
			};

			try {
				// Make a POST request to the signup API endpoint

				// This will create a new user in the database
				// and return a response with the user data
				// and a session token
				// This will be used to authenticate the user
				// and redirect them to the dashboard page
				// using next-auth credentials provider
				const response = await fetch('http://localhost:3000/api/signUp', {
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(data),
				});

				if (!response.ok) {
					toast.error('Signup Failed!');
					throw new Error('Network response was not ok');
				} else {
					toast.success('Signup successful!');
					signIn('credentials', {
						mobileNumber: phoneNumber,
						password,
					});
				}
			} catch (error) {
				console.error('Error signup:', error);
			}
		});
	};

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
					<CardTitle className='text-center text-pink-800'>Sign Up</CardTitle>
					<CardDescription className='text-center text-pink-600'>
						Create your breast cancer specialist account
					</CardDescription>
				</CardHeader>

				<CardContent className='w-full flex flex-col gap-4 pb-6 pt-6'>
					<form onSubmit={onSubmit} className='w-full flex flex-col gap-4'>
						{/* Name */}
						<div className='w-full flex flex-col gap-2'>
							<Label htmlFor='name' className='text-pink-700'>
								Name
							</Label>
							<div className='relative'>
								<Input
									id='name'
									className='peer pe-9 border-2 border-pink-200 focus:border-pink-400 focus:ring-pink-400  text-pink-400'
									placeholder='Full name'
									type='text'
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
									disabled={pending}
									autoFocus
								/>
								<div className='pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-pink-400 peer-disabled:opacity-50'>
									<User size={16} strokeWidth={2} aria-hidden='true' />
								</div>
							</div>
						</div>

						{/* Email */}
						<div className='w-full flex flex-col gap-2'>
							<Label htmlFor='email' className='text-pink-700'>
								Email
							</Label>
							<div className='relative'>
								<Input
									id='email'
									type='email'
									className='peer pe-9 border-pink-200 focus:border-pink-400 focus:ring-pink-400  text-pink-400'
									placeholder='you@example.com'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									disabled={pending}
								/>
								<div className='pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-pink-400 peer-disabled:opacity-50'>
									<Mail size={16} strokeWidth={2} aria-hidden='true' />
								</div>
							</div>
						</div>

						{/* Phone */}
						<div className='w-full flex flex-col gap-2'>
							<Label htmlFor='phone' className='text-pink-700'>
								Phone Number
							</Label>
							<div className='relative'>
								<Input
									id='phone'
									className='peer pe-9 border-pink-200 focus:border-pink-400 focus:ring-pink-400  text-pink-400'
									placeholder='Enter mobile number'
									type='tel'
									value={phoneNumber}
									onChange={(e) => setPhoneNumber(e.target.value)}
									required
									disabled={pending}
								/>
								<div className='pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-pink-400 peer-disabled:opacity-50'>
									<Phone size={16} strokeWidth={2} aria-hidden='true' />
								</div>
							</div>
						</div>

						{/* Password */}
						<div className='w-full flex flex-col gap-2'>
							<Label htmlFor='password' className='text-pink-700'>
								Password
							</Label>
							<div className='relative'>
								<Input
									id='password'
									className='pe-9 border-pink-200 focus:border-pink-400 focus:ring-pink-400'
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
							Sign Up
						</Button>
					</form>

					<div className='w-full text-sm mx-auto flex items-center justify-start text-pink-700'>
						<p>Already have an account:</p>
						<Button variant='link' className='text-pink-600 hover:text-pink-800'>
							<Link href='/login'>Log In</Link>
						</Button>
					</div>

					{!!error && (
						<CardDescription className='text-rose-500 text-center text-base flex items-center justify-center gap-2 bg-rose-50 py-2 rounded-md'>
							<TriangleAlert className='text-rose-500' /> Signup failed, try again
						</CardDescription>
					)}
				</CardContent>
			</Card>
		</div>
	);
};

export default SignupCard;

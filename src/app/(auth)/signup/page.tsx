import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import SignupCard from './signup-card';

import Image from 'next/image';

const SignupPage = async () => {
	const session = await auth();
	if (session?.user?.id) return redirect('/');
	return (
		<section className='w-screen h-screen flex items-center justify-center relative overflow-hidden'>
			{/* Background Image with Overlay */}
			<div className='absolute inset-0 z-0'>
				<Image
					src='/pink-stethoscope.jpg'
					alt='Pink stethoscope with breast cancer awareness ribbon'
					fill
					style={{ objectFit: 'cover' }}
					className='opacity-45'
				/>
				{/* <div className='absolute inset-0 bg-gradient-to-r from-pink-100/80 to-pink-200/80'></div> */}
			</div>

			{/* Content */}
			{/*  sign up card */}
			<div className='relative z-10 w-full'>
				<SignupCard />
			</div>
		</section>
	);
};

export default SignupPage;

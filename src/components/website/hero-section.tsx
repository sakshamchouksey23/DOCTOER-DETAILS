'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
	return (
		<motion.section
			className='mb-16 flex flex-col items-center text-center'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<motion.div
				className='mb-2 inline-block rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-800'
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.2, duration: 0.5 }}
			>
				Breast Cancer Awareness
			</motion.div>

			<motion.h1
				className='mb-4 text-3xl font-bold leading-tight tracking-tighter text-pink-900 md:text-4xl'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.6 }}
			>
				Helping You Find the Right Breast Cancer Specialist
			</motion.h1>

			<motion.p
				className='mb-8 text-lg text-pink-800/80'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.6 }}
			>
				Breast cancer can be overwhelming — we&apos;re here to make the journey easier by helping you find trusted,
				experienced doctors near you.
			</motion.p>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5, duration: 0.6 }}
			>
				<Button className='bg-pink-600 px-6 py-6 text-lg font-medium hover:bg-pink-700' asChild>
					<Link href='doctors-details'>Find a Specialist</Link>
				</Button>
			</motion.div>
		</motion.section>
	);
}

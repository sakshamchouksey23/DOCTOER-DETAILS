'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

import { toast } from 'sonner';
import { doctors } from '@/lib/data';
import LogOutButton from '@/components/sidebar/log-out-button';

export default function DoctorDirectory() {
	// State to manage the search term and filtered doctors
	// The search term is used to filter the list of doctors based on user input
	// The filtered doctors are the results that match the search criteria
	// The initial state of filtered doctors is set to the full list of doctors

	const [searchTerm, setSearchTerm] = useState('');
	const [filteredDoctors, setFilteredDoctors] = useState(doctors);

	// Effect to filter doctors based on the search term
	// This effect runs whenever the search term changes
	// It filters the doctors array based on the search term
	// The filter checks if the doctor's name, specialization, or hospital affiliation includes the search term (case insensitive)
	useEffect(() => {
		const results = doctors.filter((doctor) => {
			const searchLower = searchTerm.toLowerCase();
			return (
				doctor.name.toLowerCase().includes(searchLower) ||
				doctor.specialization.toLowerCase().includes(searchLower) ||
				(doctor.hospitalAffiliation && doctor.hospitalAffiliation.toLowerCase().includes(searchLower))
			);
		});
		setFilteredDoctors(results);
	}, [searchTerm]);

	return (
		<div className='min-h-screen bg-pink-50 relative overflow-hidden'>
			{/* Decorative SVG Background */}
			<div className='absolute inset-0 z-0 overflow-hidden'>
				<svg className='absolute w-full h-full opacity-10' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'>
					<path d='M0,500 C150,400 350,300 500,500 C650,700 850,600 1000,500 L1000,1000 L0,1000 Z' fill='white' />
					<path d='M0,600 C150,500 350,400 500,600 C650,800 850,700 1000,600 L1000,1000 L0,1000 Z' fill='white' />
					<path d='M0,700 C150,600 350,500 500,700 C650,900 850,800 1000,700 L1000,1000 L0,1000 Z' fill='white' />
				</svg>
			</div>
			<div className='container mx-auto py-8 px-4 relative z-10 max-w-7xl'>
				<LogOutButton />

				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='max-w-lg mx-auto mb-8'
				>
					<h1 className='text-3xl font-bold text-pink-800 mb-2 text-center'>Breast Cancer Specialists</h1>
					<p className='text-pink-600 mb-6 text-center'>Find the right specialist for your care</p>

					<div className='relative'>
						<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 h-4 w-4' />
						<Input
							type='text'
							placeholder='Search by name, specialization, or hospital...'
							value={searchTerm}
							// The onChange event handler updates the search term state whenever the input changes
							// This allows the user to filter the list of doctors based on their input
							onChange={(e) => setSearchTerm(e.target.value)}
							className='pl-10 border-pink-200 bg-white focus:ring-pink-400 focus:border-pink-400 text-pink-400'
						/>
					</div>
				</motion.div>

				<div className='max-w-7xl mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
						{filteredDoctors.length > 0 ? (
							filteredDoctors.map((doctor, index) => (
								// Animate each doctor card with a staggered effect
								// The motion.div component from Framer Motion is used to apply animations

								<motion.div
									key={`${doctor.name}-${index}`}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: index * 0.05 }}
								>
									<Card className='h-full p-4 border border-pink-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white'>
										<div className='flex items-start gap-4'>
											<HoverCard>
												<HoverCardTrigger asChild>
													<div className='flex-shrink-0'>
														<Avatar className='h-16 w-16 border-2 border-pink-100'>
															<AvatarImage src={doctor.image} alt={doctor.name} />
															<AvatarFallback className='bg-pink-200 text-pink-800'>
																{doctor.name
																	.split(' ')
																	.map((n) => n[0])
																	.join('')}
															</AvatarFallback>
														</Avatar>
													</div>
												</HoverCardTrigger>
												<HoverCardContent className='w-80 bg-white p-4 shadow-lg border border-pink-100'>
													<div className='flex justify-between space-x-4'>
														<Avatar className='h-12 w-12'>
															<AvatarImage src={doctor.image} />
															<AvatarFallback className='bg-pink-200 text-pink-800'>
																{doctor.name
																	.split(' ')
																	.map((n) => n[0])
																	.join('')}
															</AvatarFallback>
														</Avatar>
														<div className='space-y-1'>
															<h4 className='text-sm font-semibold'>{doctor.name}</h4>
															<p className='text-sm text-pink-800'>
																{doctor.specialization} • {doctor.place}
															</p>
															<div className='flex items-center pt-2'>
																<span className='text-xs text-pink-600 bg-pink-50 px-2 py-1 rounded-full'>
																	{doctor.experience || 'Experienced Professional'}
																</span>
															</div>
														</div>
													</div>
												</HoverCardContent>
											</HoverCard>

											<div className='flex-1'>
												<div className='flex justify-between items-start'>
													<div>
														<h3 className='font-medium text-pink-900'>{doctor.name}</h3>
														<p className='text-sm text-pink-700'>{doctor.qualifications}</p>
														<p className='text-sm text-pink-600'>{doctor.experience}</p>
													</div>
													{doctor.consultationFee && (
														<span className='text-sm font-medium text-pink-800 bg-pink-100 px-2 py-1 rounded-md'>
															{doctor.consultationFee}
														</span>
													)}
												</div>

												<div className='mt-2'>
													<p className='text-sm text-pink-800'>
														<span className='font-medium'>Specialization:</span> {doctor.specialization}
													</p>
													{doctor.hospitalAffiliation && (
														<p className='text-sm text-pink-700 mt-1'>
															<span className='font-medium'>Hospital:</span>{' '}
															<a
																href={`https://www.google.com/maps/search/${encodeURIComponent(
																	doctor.hospitalAffiliation,
																)}`}
																target='_blank'
																rel='noopener noreferrer'
																className='text-pink-600 hover:text-pink-800 hover:underline'
															>
																{doctor.hospitalAffiliation}
															</a>
														</p>
													)}
													{doctor.patientStories && (
														<p className='text-xs text-pink-600 mt-1'>{doctor.patientStories}</p>
													)}
												</div>

												<div className='mt-3'>
													<Button
														variant='default'
														size='sm'
														className='bg-pink-600 hover:bg-pink-700 text-white'
														onClick={() => {
															toast.success(
																`Appointment Request Sent! We'll contact you about your appointment with ${doctor.name} as soon as possible.`,
															);
														}}
													>
														Book Appointment
													</Button>
												</div>
											</div>
										</div>
									</Card>
								</motion.div>
							))
						) : (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
								className='text-center py-8 text-pink-700 col-span-1 md:col-span-2 lg:col-span-3'
							>
								No doctors found matching your search criteria.
							</motion.div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

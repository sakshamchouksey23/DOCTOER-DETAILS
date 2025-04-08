import { AboutSection } from '@/components/website/about-section';
import { BackgroundBlob } from '@/components/website/background-blob';
import { FeaturesSection } from '@/components/website/features-section';
import { HeroSection } from '@/components/website/hero-section';
import { WorkflowSection } from '@/components/website/workflow-section';
import React from 'react';

const Landing = () => {
	return (
		<main className='relative min-h-screen overflow-hidden bg-pink-50'>
			<BackgroundBlob className='absolute -top-40 -right-40 z-0 h-96 w-96 text-pink-100/50' />
			<BackgroundBlob className='absolute -bottom-40 -left-40 z-0 h-96 w-96 rotate-180 text-pink-100/50' />

			<div className='container relative z-10 mx-auto max-w-screen-lg px-4 py-12 md:py-20'>
				<HeroSection />
				<AboutSection />
				<FeaturesSection />
				<WorkflowSection />
			</div>
		</main>
	);
};

export default Landing;

'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
	return (
		<motion.section
			className='mb-16'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			<motion.h2
				className='mb-6 text-center text-2xl font-bold text-pink-900'
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.2, duration: 0.5 }}
			>
				What is Breast Cancer?
			</motion.h2>

			<Card className='overflow-hidden border-pink-200 bg-white shadow-md'>
				<CardContent className='p-6 space-y-4'>
					<motion.p
						className='text-pink-800'
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3, duration: 0.5 }}
					>
						Breast cancer is a type of cancer that starts in the breast tissues. It most commonly affects women, but men
						can get it too. Early detection and the right specialist care can make a big difference in outcomes.
					</motion.p>

					<motion.p
						className='text-pink-800'
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4, duration: 0.5 }}
					>
						It occurs when abnormal cells in the breast grow uncontrollably. Factors include genetics, lifestyle,
						environment, and hormonal changes.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.5, duration: 0.5 }}
					>
						<h3 className='text-lg font-semibold text-pink-900 mb-1'>Common Symptoms:</h3>
						<ul className='list-disc pl-5 text-pink-800 space-y-1'>
							<li>Lump or thickening in the breast or underarm</li>
							<li>Change in breast size, shape, or appearance</li>
							<li>Unusual nipple discharge or inversion</li>
							<li>Redness or flaky skin on the breast</li>
							<li>Persistent pain in the breast area</li>
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.6, duration: 0.5 }}
					>
						<h3 className='text-lg font-semibold text-pink-900 mb-1'>Risk Factors:</h3>
						<ul className='list-disc pl-5 text-pink-800 space-y-1'>
							<li>Family history of breast cancer</li>
							<li>Genetic mutations (e.g. BRCA1 and BRCA2)</li>
							<li>Radiation exposure</li>
							<li>Obesity and alcohol consumption</li>
							<li>Hormone replacement therapy</li>
						</ul>
					</motion.div>

					<motion.p
						className='text-pink-800'
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.7, duration: 0.5 }}
					>
						Regular screenings like mammograms, breast self-exams, and consulting specialists for unusual changes can
						help detect breast cancer early — often before symptoms appear.
					</motion.p>
				</CardContent>
			</Card>
		</motion.section>
	);
}

'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { FaPlay } from 'react-icons/fa';

import makeupGirlImage from '@/public/assets/images/about-us/makeupGirl.jpg';

const AnimatedNumbers = ({ value }: { value: number }) => {
	const ref = useRef<HTMLSpanElement>(null);
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 2000 });
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [motionValue, isInView, value]);

	useEffect(() => {
		springValue.on('change', (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springValue, value]);

	return <span ref={ref}></span>;
};

const About = () => {
	const t = useTranslations();
	const playVideo = (videoUrl: string) => {
		window.open(videoUrl, '_blank');
	};

	return (
		<div className='my-36 px-5 lg:px-[50px] xl:px-[150px] text-[#232323]'>
			<div className='flex flex-col lg:flex-row items-start gap-10'>
				<div>
					<h1 className='font-quentin text-[24px] lg:text-[35px] text-primary'>
						{t('About Cosmecos')}
					</h1>
					<p className='font-raleway text-[28px] lg:text-[38px] font-light mb-2'>
						{t('PERFECT PERFUME')}
					</p>
					<p className='font-bold mb-4'>
						{t(
							'Popularized through customer relationships with some of the world’s most recognizable faces'
						)}
					</p>
					<p className='text-[#616161]'>{t('home-about-1')}</p>
					<div className='mt-10 flex items-center gap-2 lg:gap-20 text-center font-raleway'>
						<div>
							<p className='text-primary text-[28px] lg:text-[48px] font-light'>
								<AnimatedNumbers value={470} /> K
							</p>
							<p className='text-lg'>{t('Perfumes sold')}</p>
						</div>
						<div>
							<p className='text-primary text-[28px] lg:text-[48px] font-light'>
								<AnimatedNumbers value={10} /> {t('years')}
							</p>
							<p className='text-lg'>{t('Perfect years')}</p>
						</div>
					</div>

					<button className='animate-button w-[180px] mt-10'>
						{t('Explore More')}
					</button>
				</div>

				<div className='relative w-full'>
					<Image alt='makeup girl' src={makeupGirlImage} className='max-md:static' />
					<button
						className='absolute inset-0 bg-opacity-30 flex items-center justify-center cursor-pointer '
						onClick={() => playVideo('https://www.youtube.com/watch?v=C1H6TRcvNXg')}>
						<FaPlay
							size={50}
							color='white'
							className='hover:scale-125 transition-all duration-500'
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;

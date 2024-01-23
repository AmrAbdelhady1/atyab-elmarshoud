'use client';

import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

import bgImage from '../../public/assets/images/home/testimonials/bgImage.jpg';

const Testimonials = () => {
	const t = useTranslations();
	return (
		<div className='w-full mt-44 relative'>
			<Image
				alt='bg image'
				src={bgImage}
				className='min-h-[920px] object-cover max-lg:h-[740px]'
			/>
			<div className='absolute flex items-center justify-center inset-0'>
				<div className='bg-white max-w-[952px] min-h-[579px] p-6 max-lg:w-full max-lg:h-[600px] flex'>
					<div className='flex flex-col items-start justify-start border border-black px-20 py-20 max-lg:py-7 max-lg:px-5'>
						<p className='text-[#339994] font-quentin text-3xl leading-5 font-extralight mb-2 max-lg:text-2xl'>
							{t('Testemonials')}
						</p>
						<p className='text-left text-[2.3rem] font-extralight tracking-tight mb-2 max-lg:text-3xl'>
							{t('WHAT OUR CLIENTS SAY')}
						</p>
						<p className='text-xl leading-[2em] font-light text-slate-500 max-lg:text-lg'>
							"
							{t(
								'Brows should begin directly above the middle of your nostrils The highest point of the arch should connect the tip of the nose with the middle of the iris Brows should end where the corner of the nostril connects with the outer corner of the eye'
							)}
							"
						</p>
						<p className='mt-10 text-xl leading-[1.8em]'>{t('Samantha Peterson')}</p>
						<p className='mt-1 text-[#339994] text-sm font-bold'>
							{t('Client of Cosmecos')}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;

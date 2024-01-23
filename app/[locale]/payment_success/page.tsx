'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { PreLoader } from '@/components';
import PageHeader from '@/components/PageHeader';

import successSvg from '@/public/assets/svg/payment-success.svg';

const Success = () => {
	const t = useTranslations();
	return (
		<>
			<PreLoader />
			<PageHeader
				bgImgClassName='header-img'
				firstText='Organic Cosmetic'
				firstTextClassName='font-quentin'
				secondText='Payment Success'
			/>

			<section className='px-8 py-14 grid grid-cols-1 items-center justify-items-stretch lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>
				<article className='me-10'>
					<h1 className='mb-5 font-bold text-3xl'>
						{t('Thank you for your purchase!')}
					</h1>
					<p className='font-semibold'>{t('lorem')}</p>
					<div className='mt-6'>
						<button className='bg-black text-white border-2 border-[#000] rounded-full me-4'>
							<Link href={'/'} className='block px-10 py-1 '>
								{t('Continue shopping')}
							</Link>
						</button>
						<button className='bg-white text-black rounded-full me-4 border-2 border-[#000]'>
							<Link href={'/'} className='block px-10 py-1 '>
								{t('View your order')}
							</Link>
						</button>
					</div>
				</article>
				<img src={successSvg.src} alt='Success' className=' h-[380px]' />
			</section>
		</>
	);
};

export default Success;

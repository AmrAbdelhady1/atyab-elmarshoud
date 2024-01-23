'use client';

import React from 'react';
import { useTranslations } from "next-intl";

const ShowNow = () => {
	 const t = useTranslations();
	return (
		<div className='relative hidden xl:block'>
			<img
				src='https://8ded8880.rocketcdn.me/themes/cosmecos-new/wp-content/uploads/2021/02/home2-bg-5.jpg'
				alt='bg'
			/>
			<div
				className={`px-40 flex items-center justify-between absolute top-0 w-full ${
					t('local') === 'ar' ? 'flex-row-reverse' : ''
				}`}>
				<div className='text-[#616161]'>
					<h1 className='text-white font-quentin text-[60px] mb-2'>
						{t('Perfume')}
					</h1>
					<p className='text-[#232323] text-[48px] font-raleway font-light mb-4'>
						{t('Fresh Aroma')}
					</p>
					<p>{t('Dogteeth tetra coley Ragfish yellow-and-black triplefin')}</p>
					<p>{t('grenadier dogfish shark torpedo scaly dragonfish flathead')}</p>

					<button className='mt-20 animate-button !bg-transparent w-[150px] h-[50px]'>
						{t('shop now')}
					</button>
				</div>
				<div className='relative'>
					<img
						src='https://8ded8880.rocketcdn.me/themes/cosmecos-new/wp-content/uploads/2021/02/home2-image-3.png'
						alt='perfume'
						className='lg:max-h-[500px] xl:max-h-[600px]'
					/>
					<div className='w-[146px] h-[146px] rounded-full bg-[#f8798e] text-white font-raleway top-[200px] left-[-50px] absolute flex items-center justify-center flex-col'>
						<p className='font-medium text-[41px]'>-50%</p>
						<p>{t('sale')}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShowNow;

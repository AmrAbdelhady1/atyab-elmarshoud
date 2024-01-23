'use client';

import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';

const BestPrice = () => {
	const t = useTranslations();
	const data = [
		{
			label: 'Best price',
			name: 'Perfume Flower Collection',
			image:
				'https://8ded8880.rocketcdn.me/themes/cosmecos-new/wp-content/uploads/2021/01/home2-banner-1-2.jpg',
			link: '/category/5',
		},
		{
			label: 'New perfume',
			name: 'Perfume Cool Collection',
			image:
				'	https://8ded8880.rocketcdn.me/themes/cosmecos-new/wp-content/uploads/2021/01/home2-banner-2-2.jpg',
			link: '/category/6',
		},
	];
	return (
		<div className='p-10 grid lg:grid-cols-2 justify-between gap-20 grid-cols-1'>
			{data.map((item) => (
				<div
					className='relative w-full lg:h-[385px] h-[240px] group'
					key={item.label}>
					<div className='w-full h-full overflow-hidden'>
						<img
							src={item.image}
							alt='item'
							className='w-full h-full group-hover:scale-110 ease-in-out duration-500 object-cover'
						/>
					</div>
					<div className='absolute border border-black w-full h-full z-10 top-[-20px] left-[-20px]'></div>

					<div
						className={`absolute z-20 top-0 bottom-0 left-0 p-5 lg:p-10 ${
							t('local') === 'ar' ? '' : 'right-0'
						}`}>
						<h1 className='font-quentin text-[24px] lg:text-[60px] text-[#33999487] mb-2 lg:mb-5'>
							{t(item.label)}
						</h1>
						<p className='text-[#232323] text-[16px] lg:text-[24px] mb-5 lg:mb-10'>
							{t(item.name)}
						</p>
						<Link
							href={item.link}
							className='animate-button !bg-transparent !w-[150px] !h-[50px]'>
							{t('shop now')}
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default BestPrice;

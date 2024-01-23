'use client';

import React from 'react';
import { useTranslations } from "next-intl";

const Category = () => {
	 const t = useTranslations();
	const data = [
		{
			name: 'Fresh Fragrances',
			description:
				'Black scalyfin kingfish convict blenny ziege yellow moray whalefish silver drifitinity elpo',
			image: '/assets/svg/fresh-fragrances.svg',
		},
		{
			name: 'Floral Fragrances',
			description:
				'Atlantic eel cutthroat eel atka mackerel freshwater eel rock bass rocketly gylty',
			image: '/assets/svg/floral-fragrances.svg',
		},
		{
			name: 'Oceanic Fragrances',
			description:
				'California halibut gianttail dogfish plunderfish dorado rock beauty combtooth blenny',
			image: '/assets/svg/oceanic-fragrances.svg',
		},
		{
			name: 'Woody Fragrances',
			description:
				'Redmouth whalefish ling cod koi spotted dogfish lemon sole nurse sandfish slender catfish',
			image: '/assets/svg/woody-fragrances.svg',
		},
	];
	return (
		<div className='mt-28 flex flex-col items-center text-center'>
			<h1 className='text-primary font-quentin text-[24px] lg:text-[35px] mb-2'>
				{t('Category')}
			</h1>
			<p className='text-[#232323] text-[28px] lg:text-[38px] font-light font-raleway mb-4'>
				{t('FRAGRANCE TYPES')}
			</p>
			<p className='text-[#9a9a9a] text-lg mb-20 tracking-wide'>
				{t('The stylish and organized cosmetic products')}
			</p>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center mx-auto gap-10 w-full px-10 lg:px-[200px] xl:px-[300px]'>
				{data.map((item) => (
					<div
						className='flex flex-col items-center justify-center gap-6 max-w-[250px] mx-auto'
						key={item.name}>
						<img src={item.image} alt='item' className='w-[100px] h-[100px]' />
						<h1 className='text-[24px] text-[#232323] font-raleway'>
							{t(item.name)}
						</h1>
						<p className='text-center text-[#616161] font-light leading-8'>
							{t(item.description)}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;

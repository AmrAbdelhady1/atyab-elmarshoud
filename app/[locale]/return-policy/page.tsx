'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import { PreLoader } from '@/components';

import PageHeader from '@/components/PageHeader';

const page = () => {
	const t = useTranslations();
	return (
		<>
			<PreLoader />

			{/* Header */}
			<PageHeader
				bgImgClassName='header-img'
				firstText='Organic Perfumes'
				firstTextClassName='font-quentin'
				secondText='Return Policy'
			/>

			{/* Content */}
			<div className='my-[150px] mx-[119.5px] flex flex-col gap-5 border-b border-b-gray-300 pb-40 max-lg:mx-10'>
				<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
					{t('return-1')}
				</p>
			</div>
		</>
	);
};

export default page;

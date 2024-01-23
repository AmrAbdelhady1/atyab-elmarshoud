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
				firstText='Organic Cosmetic'
				firstTextClassName='font-quentin'
				secondText='Privacy Policy'
			/>

			{/* Content */}
			<div className='my-[150px] mx-[119.5px] flex flex-col gap-5 border-b border-b-gray-300 pb-40 max-lg:mx-10'>
				<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
					{t('privacy-1')}
				</p>
				<h2 className='font-raleway font-normal text-[26px] leading-9'>
					{t('ACCOUNT')}
				</h2>
				<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
					{t('account-1')}
				</p>
				<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
					{t('account-2')}
				</p>
				<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
					{t('account-3')}
				</p>
				<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
					{t('account-4')}
				</p>
				<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
					{t('account-5')}
				</p>
				<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
					{t('account-6')}
				</p>
				<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
					{t('account-7')}
				</p>
				<h2 className='font-raleway font-normal text-[26px] leading-9'>
					{t('E-COMMUNICATION')}
				</h2>
				<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
					{t('ecom-1')}
				</p>
				<h2 className='font-raleway font-normal text-[26px] leading-9'>
					{t('AVAILABILITY OF WEBSITE')}
				</h2>
				<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
					{t('availability-1')}
				</p>
			</div>
		</>
	);
};

export default page;

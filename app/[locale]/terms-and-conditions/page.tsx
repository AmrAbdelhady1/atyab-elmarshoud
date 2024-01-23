'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import { PreLoader } from '@/components';
import PageHeader from '@/components/PageHeader';

import { TbPointFilled } from 'react-icons/tb';

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
				secondText='Terms & Conditions'
			/>

			{/* Content */}
			<div className='my-[150px] mx-[119.5px] flex flex-col gap-10 pb-10 max-lg:mx-10'>
				<div className='flex flex-col gap-5 border-b border-b-gray-300 pb-5'>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-1')}
					</p>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-2')}
					</p>
				</div>

				{/* Terms of Use */}
				<div className='flex flex-col gap-5 border-b border-b-gray-300 pb-5'>
					<h2 className='font-raleway font-normal text-[26px] leading-9'>
						{t('TERMS OF USE')}
					</h2>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-3')}
					</p>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-4')}
					</p>
				</div>

				{/* Website Security */}
				<div className='flex flex-col gap-5 border-b border-b-gray-300 pb-5'>
					<h2 className='font-raleway font-normal text-[26px] leading-9'>
						{t('WEBSITE SECURITY')}
					</h2>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-5')}
					</p>
					<div className='flex items-baseline ml-4'>
						<TbPointFilled className='flex-[0.05]' />
						<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch] flex-[0.95]'>
							{t('terms-6')}
						</p>
					</div>
					<div className='flex items-baseline ml-4'>
						<TbPointFilled className='flex-[0.05]' />
						<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch] flex-[0.95]'>
							{t('terms-7')}
						</p>
					</div>
					<div className='flex items-baseline ml-4'>
						<TbPointFilled className='flex-[0.05]' />
						<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch] flex-[0.95]'>
							{t('terms-8')}
						</p>
					</div>
					<div className='flex items-baseline ml-4'>
						<TbPointFilled className='flex-[0.05]' />
						<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch] flex-[0.95]'>
							{t('terms-9')}
						</p>
					</div>
					<div className='flex items-baseline ml-4'>
						<TbPointFilled className='flex-[0.05]' />
						<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch] flex-[0.95]'>
							{t('terms-10')}
						</p>
					</div>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-11')}
					</p>
				</div>

				{/* Registration - My Account */}
				<div className='flex flex-col gap-5 border-b border-b-gray-300 pb-5'>
					<h2 className='font-raleway font-normal text-[26px] leading-9'>
						{t('REGISTRATION - MY ACCOUNT')}
					</h2>
					<div className='flex items-baseline ml-4'>
						<TbPointFilled className='flex-[0.05]' />
						<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch] flex-[0.95]'>
							{t('terms-12')}
						</p>
					</div>
					<div className='flex items-baseline ml-4'>
						<TbPointFilled className='flex-[0.05]' />
						<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch] flex-[0.95]'>
							{t('terms-13')}
						</p>
					</div>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-14')}
					</p>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-15')}
					</p>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-16')}
					</p>
				</div>

				{/* Electronic Communication */}
				<div className='flex flex-col gap-5 border-b border-b-gray-300 pb-5'>
					<h2 className='font-raleway font-normal text-[26px] leading-9'>
						{t('ELECTRONIC COMMUNICATION')}
					</h2>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-17')}
					</p>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-18')}
					</p>
				</div>

				{/* Product Info and Pricing */}
				<div className='flex flex-col gap-5 border-b border-b-gray-300 pb-5'>
					<h2 className='font-raleway font-normal text-[26px] leading-9'>
						{t('PRODUCTS INFORMATION, STOCK AND PRICING')}
					</h2>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-19')}
					</p>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-20')}
					</p>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-21')}
					</p>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-22')}
					</p>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-23')}
					</p>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-24')}
					</p>
				</div>

				{/* Payment */}
				<div className='flex flex-col gap-5 border-b border-b-gray-300 pb-5'>
					<h2 className='font-raleway font-normal text-[26px] leading-9'>
						{t('PAYMENT')}
					</h2>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-25')}
					</p>
					<div className='flex items-baseline ml-4'>
						<TbPointFilled className='flex-[0.05]' />
						<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch] flex-[0.95]'>
							{t('Online payment gateway (Myfatoorah)')}
						</p>
					</div>
				</div>

				{/* Amendments */}
				<div className='flex flex-col gap-5 border-b border-b-gray-300 pb-5'>
					<h2 className='font-raleway font-normal text-[26px] leading-9'>
						{t('AMENDMENT OF THE TERMS AND CONDITIONS')}
					</h2>
					<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
						{t('terms-26')}
					</p>
				</div>
			</div>
		</>
	);
};

export default page;

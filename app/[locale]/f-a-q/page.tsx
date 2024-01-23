'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { PreLoader } from '@/components';
import PageHeader from '@/components/PageHeader';

import contactUsImage from '@/public/assets/images/faq/contactus.jpg';
import beautyImage from '@/public/assets/images/faq/beauty.jpg';

import { FiPlus } from 'react-icons/fi';
import { TbPoint } from 'react-icons/tb';
import { CgClose, CgSearch } from 'react-icons/cg';
import { GrCatalog } from 'react-icons/gr';

const qAndA = [
	{
		question: 'Do You Have A Store In Europe?',
		answer: 'faq-1',
	},
	{
		question: 'Can I Pay With Visa Inspire Card?',
		answer: 'faq-2',
	},
	{
		question: 'High Fashion Impact On Our Brand?',
		answer: 'faq-3',
	},
	{
		question: 'Is It Safe On-Line Ordering?',
		answer: 'faq-4',
	},
	{
		question: 'Shipping To My Country?',
		answer: 'faq-5',
	},
];

const page = () => {
	const t = useTranslations();
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
	const [showSidebar, setShowSidebar] = useState(false);

	const handleAnswerClick = (index: number) => {
		setSelectedAnswerIndex(index);
	};

	return (
		<>
			<PreLoader />

			{/* Header */}
			<PageHeader
				bgImgClassName='header-img'
				firstText='Organic Cosmetic'
				firstTextClassName='font-quentin'
				secondText='FAQ'
			/>

			{/* Content */}
			<div className='my-[150px] mx-[119.5px] flex gap-10 max-lg:mx-10'>
				{/* Questions */}
				<div className='flex-[0.8] max-lg:flex-1'>
					<div className='flex flex-col gap-10 border-b border-b-gray-300 pb-40'>
						<div className='flex flex-col gap-5'>
							<h2 className='font-raleway font-normal text-[26px] leading-9'>
								{t('1 Do You Have A Store In Europe?')}
							</h2>
							<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
								{t('faq-1')}
							</p>
						</div>
						<div className='flex flex-col gap-5'>
							<h2 className='font-raleway font-normal text-[26px] leading-9'>
								{t('2 Can I Pay With Visa Inspire Card?')}
							</h2>
							<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
								{t('faq-2')}
							</p>
						</div>
						<div className='flex flex-col gap-5'>
							<h2 className='font-raleway font-normal text-[26px] leading-9'>
								{t('3 High Fashion Impact On Our Brand?')}
							</h2>
							<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
								{t('faq-3')}
							</p>
						</div>
						<div className='flex flex-col gap-5'>
							<h2 className='font-raleway font-normal text-[26px] leading-9'>
								{t('4 Is It Safe On-Line Ordering?')}
							</h2>
							<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
								{t('faq-4')}
							</p>
						</div>
						<div className='flex flex-col gap-5'>
							<h2 className='font-raleway font-normal text-[26px] leading-9'>
								{t('5 Shipping To My Country?')}
							</h2>
							<p className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch]'>
								{t('faq-5')}
							</p>
						</div>
					</div>
					<div className='flex flex-col mt-20'>
						{qAndA.map((element, index) => (
							<div key={index}>
								<motion.div
									layout
									className='flex justify-between items-center py-10 border-t border-t-black cursor-pointer'
									onClick={() => handleAnswerClick(index)}>
									<p className='font-raleway font-normal text-[26px] leading-7 max-lg:text-[22px]'>
										{t(element.question)}
									</p>
									<FiPlus size={30} />
								</motion.div>
								<AnimatePresence mode='popLayout'>
									{selectedAnswerIndex === index && ( // Render answer if selectedAnswerIndex matches this index
										<motion.p
											initial={{ y: -50 }}
											animate={{ y: 0 }}
											exit={{ opacity: 0 }}
											className='font-nunito font-normal text-[#616161] text-[18px] leading-8 tracking-wide max-w-[95ch] pb-5'>
											{t(element.answer)}
										</motion.p>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</div>
				<div className='flex-[0.2] flex flex-col gap-24 max-lg:hidden'>
					<div className='flex justify-between items-center p-[16px] border border-gray-300'>
						<input
							type='text'
							placeholder={t('Search')}
							name='search'
							id='search'
							className='font-nunito font-normal text-[18px] text-[#616161]'
						/>
						<CgSearch size={30} />
					</div>
					<div className='flex flex-col gap-8'>
						<p className='font-raleway font-normal text-3xl break-words'>
							{t('Categories')}
						</p>
						<ul>
							<li className='flex items-center gap-5 mb-4'>
								<TbPoint />
								<Link
									href='https://demo.artureanec.com/themes/cosmecos-new/category/beauty/'
									className='font-raleway font-medium text-lg tracking-wide hover:text-[#6396d0] transition-all duration-300'>
									{t('Beauty')}
								</Link>
							</li>
							<li className='flex items-center gap-5 mb-4'>
								<TbPoint />
								<Link
									href='https://demo.artureanec.com/themes/cosmecos-new/category/beauty-blog/'
									className='font-raleway font-medium text-lg tracking-wide hover:text-[#6396d0] transition-all duration-300'>
									{t('Beauty Blog')}
								</Link>
							</li>
							<li className='flex items-center gap-5 mb-4'>
								<TbPoint />
								<Link
									href='https://demo.artureanec.com/themes/cosmecos-new/category/body-care/'
									className='font-raleway font-medium text-lg tracking-wide hover:text-[#6396d0] transition-all duration-300'>
									{t('Body Care')}
								</Link>
							</li>
							<li className='flex items-center gap-5 mb-4'>
								<TbPoint />
								<Link
									href='https://demo.artureanec.com/themes/cosmecos-new/category/beauty-blog/cosmetics/'
									className='font-raleway font-medium text-lg tracking-wide hover:text-[#6396d0] transition-all duration-300'>
									{t('Cosmetics')}
								</Link>
							</li>
						</ul>
					</div>
					<div className='flex items-center justify-center relative'>
						<div>
							<Image alt='contact us' src={contactUsImage} />
						</div>
						<div className='flex flex-col items-center gap-6 absolute'>
							<h2 className='font-raleway font-normal text-3xl'>{t('Contact Us')}</h2>
							<p className='font-nunito font-normal text-lg text-[#616161] text-center max-w-[20ch]'>
								{t(
									'Smelt-whiting burbot lown loach stonecat electric ish coley roosterfish fish forehead brooder'
								)}
							</p>
							<button className='animate-button !bg-transparent !w-[160px] !h-[65px] !font-raleway !font-bold !text-sm'>
								{t('CONTACT US')}
							</button>
						</div>
					</div>
					<div>
						<Image alt='beaty image' src={beautyImage} />
					</div>
				</div>
				<div
					className='hidden max-lg:flex max-lg:items-center max-lg:justify-center max-lg:p-5 max-lg:border max-lg:border-gray-300 max-lg:shadow-md max-lg:fixed max-lg:bottom-[50%] max-lg:right-0 max-lg:border-r-0 max-lg:bg-white max-lg:overflow-auto max-lg:z-10'
					onClick={() => setShowSidebar(true)}>
					<GrCatalog />
				</div>
			</div>
			{showSidebar && (
				<div
					className='w-full h-screen bg-gray-800 bg-opacity-60 fixed top-0 right-0'
					onClick={() => setShowSidebar(false)}></div>
			)}
			<AnimatePresence mode='popLayout'>
				{showSidebar && (
					<motion.div
						initial={{ x: 300 }}
						animate={{ x: 0 }}
						exit={{ x: 300, opacity: 0 }}
						className='max-w-[85%] fixed top-0 right-0 h-screen bg-white py-20 px-5 overflow-y-auto overflow-x-hidden z-10'>
						<div
							className='relative left-[90%] my-11'
							onClick={() => setShowSidebar(false)}>
							<CgClose size={30} />
						</div>

						<div className='flex flex-col gap-24'>
							<div className='flex justify-between items-center p-[16px] border border-gray-300'>
								<input
									type='text'
									placeholder={t('Search')}
									name='search'
									id='search'
									className='font-nunito font-normal text-[18px] text-[#616161]'
								/>
								<CgSearch size={30} />
							</div>
							<div className='flex flex-col gap-8'>
								<p className='font-raleway font-normal text-3xl break-words'>
									{t('Categories')}
								</p>
								<ul>
									<li className='flex items-center gap-5 mb-4'>
										<TbPoint />
										<Link
											href='https://demo.artureanec.com/themes/cosmecos-new/category/beauty/'
											className='font-raleway font-medium text-lg tracking-wide hover:text-[#6396d0] transition-all duration-300'>
											{t('Beauty')}
										</Link>
									</li>
									<li className='flex items-center gap-5 mb-4'>
										<TbPoint />
										<Link
											href='https://demo.artureanec.com/themes/cosmecos-new/category/beauty-blog/'
											className='font-raleway font-medium text-lg tracking-wide hover:text-[#6396d0] transition-all duration-300'>
											{t('Beauty Blog')}
										</Link>
									</li>
									<li className='flex items-center gap-5 mb-4'>
										<TbPoint />
										<Link
											href='https://demo.artureanec.com/themes/cosmecos-new/category/body-care/'
											className='font-raleway font-medium text-lg tracking-wide hover:text-[#6396d0] transition-all duration-300'>
											{t('Body Care')}
										</Link>
									</li>
									<li className='flex items-center gap-5 mb-4'>
										<TbPoint />
										<Link
											href='https://demo.artureanec.com/themes/cosmecos-new/category/beauty-blog/cosmetics/'
											className='font-raleway font-medium text-lg tracking-wide hover:text-[#6396d0] transition-all duration-300'>
											{t('Cosmetics')}
										</Link>
									</li>
								</ul>
							</div>
							<div className='flex items-center justify-center relative'>
								<div>
									<Image alt='contact us' src={contactUsImage} />
								</div>
								<div className='flex flex-col items-center gap-6 absolute'>
									<h2 className='font-raleway font-normal text-3xl'>
										{t('Contact Us')}
									</h2>
									<p className='font-nunito font-normal text-lg text-[#616161] text-center max-w-[20ch]'>
										{t(
											'Smelt-whiting burbot lown loach stonecat electric ish coley roosterfish fish forehead brooder'
										)}
									</p>
									<button className='animate-button !bg-transparent !w-[160px] !h-[65px] !font-raleway !font-bold !text-sm'>
										{t('CONTACT US')}
									</button>
								</div>
							</div>
							<div className='flex items-center justify-center'>
								<Image alt='beauty image' src={beautyImage} />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default page;

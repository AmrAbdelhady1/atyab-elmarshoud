'use client';

import React from 'react';
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from 'next/image';

import Link from 'next/link';

interface BlogItemProps {
	image: StaticImageData;
	title: string;
	date: string;
	publisher: string;
	description: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
	image,
	title,
	date,
	publisher,
	description,
}) => {
	 const t = useTranslations();
	return (
		<div className='flex flex-col gap-8 p-4 py-6 border border-gray-400 relative group max-w-[324px] w-full mx-auto hover:border-black duration-300 ease-in-out'>
			<div className='flex items-center justify-center overflow-hidden w-full h-full max-w-[324px] max-h-[275px] mx-auto'>
				<Image
					alt='blog image'
					src={image}
					className='w-full h-full group-hover:scale-110 ease-in-out duration-500'
				/>
			</div>
			<div className='bg-[#1e1e1e] w-[100px] h-[28px] flex items-center justify-center absolute top-[30px] left-0'>
				<p className='text-white font-raleway text-[13px] font-medium'>
					{t(title)}
				</p>
			</div>
			<div className='flex gap-4 items-center'>
				<p className='font-nunito font-semibold text-[12px] lg:text-[15px] text-[#969696] hover:text-black duration-300 ease-in-out'>
					{t(date)}
				</p>
				<p className='text-[#339994] text-4xl font-light'>-</p>
				<p className='font-nunito font-semibold text-[12px] lg:text-[15px] text-[#969696] hover:text-black duration-300 ease-in-out'>
					{t(publisher)}
				</p>
			</div>
			<p className='font-raleway lg:text-[25px] max-w-[340px] hover:text-primary duration-300 ease-in-out'>
				{t(description)}
			</p>
			<Link
				href='#'
				className='font-raleway font-semibold text-[12px] lg:text-[14px] border-b border-b-[#339994] text-[#339994] max-w-fit pb-2 hover:border-b-transparent duration-300 ease-in-out'>
				{t('READ MORE')}
			</Link>
		</div>
	);
};

export default BlogItem;

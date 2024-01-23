'use client';

import React from 'react';
import { useTranslations } from "next-intl";

import BlogItem from '../BlogItem';

import blogImage1 from '../../public/assets/images/home/news-and-articles/pic1.jpg';
import blogImage2 from '../../public/assets/images/home/news-and-articles/pic2.jpg';
import blogImage3 from '../../public/assets/images/home/news-and-articles/pic3.jpg';

const blogsArray = [
	{
		image: blogImage1,
		title: 'BEATY BLOG',
		date: 'NOVEMBER 30, 2020',
		publisher: 'BY ADMIN',
		description: 'Romantic panic? How to buy fragrance love',
	},
	{
		image: blogImage2,
		title: 'BEATY BLOG',
		date: 'NOVEMBER 30, 2020',
		publisher: 'BY ADMIN',
		description: 'Latest Launches: Scents for all seasons perfume',
	},
	{
		image: blogImage3,
		title: 'BEATY BLOG',
		date: 'NOVEMBER 30, 2020',
		publisher: 'BY ADMIN',
		description: 'Latest Launches: Peonies and Pale Blue',
	},
];

const NewsAndArticles = () => {
	 const t = useTranslations();
	return (
		<div className='my-32'>
			<div className='flex flex-col items-center justify-center gap-3 mb-8'>
				<p className='font-quentin font-normal text-[24px] lg:text-4xl text-[#339994]'>
					{t('News & Articles')}
				</p>
				<p className='font-raleway font-light text-[28px] lg:text-[40px]'>
					{t('OUR BEAUTY BLOG')}
				</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:flex xl:px-[100px] 2xl:px-[250px] px-5 items-center justify-center gap-10 lg:gap-2'>
				{blogsArray.map((blog) => (
					<BlogItem
						key={blog.description}
						image={blog.image}
						title={blog.title}
						date={blog.date}
						publisher={blog.publisher}
						description={blog.description}
					/>
				))}
			</div>
			<div className='flex flex-col items-center justify-center gap-3 my-20'>
				<button className='animate-button w-[160px] h-[60px] font-raleway font-bold text-base'>
					{t('EXPLORE MORE')}
				</button>
			</div>
		</div>
	);
};

export default NewsAndArticles;

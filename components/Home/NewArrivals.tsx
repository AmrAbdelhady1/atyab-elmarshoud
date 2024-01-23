'use client';

import Image from 'next/image';
import React from 'react';
import { useTranslations } from "next-intl";

import NewArrivalProduct from '../NewArrivalProduct';

import sideImage from '../../public/assets/images/home/new-arrivals/sidepic.jpg';
import leftBgImage from '../../public/assets/images/home/new-arrivals/leftbg.png';
import rightBgImage from '../../public/assets/images/home/new-arrivals/rightbg.png';
import product1Image from '../../public/assets/images/home/new-arrivals/pic1.jpg';
import product2Image from '../../public/assets/images/home/new-arrivals/pic2.jpg';
import product3Image from '../../public/assets/images/home/new-arrivals/pic3.jpg';
import product4Image from '../../public/assets/images/home/new-arrivals/pic4.jpg';
import product5Image from '../../public/assets/images/home/new-arrivals/pic5.jpg';
import product6Image from '../../public/assets/images/home/new-arrivals/pic6.jpg';

const productsArray1 = [
	{
		image: product1Image,
		name: 'Dropped Body Oil',
		price: '$27.00',
		priceAfterDiscount: '$15.00',
	},
	{
		image: product2Image,
		name: 'Lipstick Brown',
		price: '$45.00',
		priceAfterDiscount: '$35.00',
	},
	{
		image: product3Image,
		name: 'Nail Polish Nova',
		price: '$30.00',
		priceAfterDiscount: '$15.00',
	},
];
const productsArray2 = [
	{
		image: product4Image,
		name: 'Perfect Concealer',
		price: '$35.00',
		priceAfterDiscount: '$28.00',
	},
	{
		image: product5Image,
		name: 'Soft Hand Lotion',
		price: '$50.00',
		priceAfterDiscount: '$35.00',
	},
	{
		image: product6Image,
		name: 'Dropped Beard Oil',
		price: '$40.00',
		priceAfterDiscount: '$38.00',
	},
];

const NewArrivals = () => {
	 const t = useTranslations();
	return (
		<div className='my-20'>
			<div className='flex flex-col items-center justify-center gap-3'>
				<p className='font-quentin font-normal text-[24px] lg:text-4xl text-[#339994]'>
					{t('New Products')}
				</p>
				<p className='font-raleway font-light text-[28px] lg:text-[38px]'>
					{t('MEET NEW ARRIVALS')}
				</p>
			</div>
			<div className='relative'>
				<Image
					alt='left background image'
					src={leftBgImage}
					className='absolute left-0 top-36 hidden lg:block'
				/>
				<div className='my-14 flex flex-col items-center lg:flex-row justify-center px-5 lg:px-[5rem] xl:px-[11rem]'>
					<div className='flex-[0.7] flex-col md:flex-row flex gap-3'>
						<div className='flex-[0.5] flex-col'>
							{productsArray1.map((product) => (
								<NewArrivalProduct
									key={product.name}
									productImage={product.image}
									productName={product.name}
									productPrice={product.price}
									productPriceAfterDiscount={product.priceAfterDiscount}
								/>
							))}
						</div>
						<div className='flex-[0.5] flex-col'>
							{productsArray2.map((product) => (
								<NewArrivalProduct
									key={product.name}
									productImage={product.image}
									productName={product.name}
									productPrice={product.price}
									productPriceAfterDiscount={product.priceAfterDiscount}
								/>
							))}
						</div>
					</div>
					<div className='flex-[0.3]'>
						<Image alt='side image' src={sideImage} />
					</div>
				</div>
				<Image
					alt='right background image'
					src={rightBgImage}
					className='absolute right-0 top-[265px] hidden lg:block'
				/>
			</div>
			<div className='flex flex-col items-center justify-center gap-3 my-10'>
				<button className='animate-button w-[160px] h-[60px] font-raleway font-bold text-base'>
					{t('EXPLORE MORE')}
				</button>
			</div>
		</div>
	);
};

export default NewArrivals;

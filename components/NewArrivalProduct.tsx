'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from "next-intl";

import { FaStar } from 'react-icons/fa';

interface NewArrivalProductProps {
	productImage: StaticImageData;
	productName: string;
	productPrice: string;
	productPriceAfterDiscount: string;
}

const NewArrivalProduct: React.FC<NewArrivalProductProps> = ({
	productImage,
	productName,
	productPrice,
	productPriceAfterDiscount,
}) => {
	 const t = useTranslations();
	return (
		<div className='flex gap-8 my-5 group'>
			<div className='relative flex items-center justify-center'>
				<Image alt='product' src={productImage} className='h-[159.6px] w-[133px]' />
				<div className='border border-black w-[90%] h-[90%] absolute ease-in-out duration-500 group-hover:w-full group-hover:h-full'></div>
			</div>
			<div className='flex flex-col items-start justify-center gap-3'>
				<p className='font-raleway font-normal text-xl cursor-pointer hover:text-[#339994] transition-all duration-500'>
					{t(productName)}
				</p>
				<div className='flex gap-3'>
					<p className='font-nunito font-semibold text-base text-[#969696] line-through'>
						{productPrice}
					</p>
					<p className='font-nunito font-semibold text-base text-[#339994]'>
						{' '}
						{productPriceAfterDiscount}
					</p>
				</div>
				<div className='flex gap-0.5 items-center justify-center'>
					<FaStar color='#ffa16a' size={13} />
					<FaStar color='#ffa16a' size={13} />
					<FaStar color='#ffa16a' size={13} />
					<FaStar color='#ffa16a' size={13} />
					<FaStar color='#ffa16a' size={13} />
				</div>
			</div>
		</div>
	);
};

export default NewArrivalProduct;

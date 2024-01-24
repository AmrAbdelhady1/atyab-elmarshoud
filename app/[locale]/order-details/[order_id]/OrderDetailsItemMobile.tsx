import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

interface OrderDetailsItemMobileProps {
	image: StaticImageData;
	product: string;
	quantity: number;
	price: string;
	currency: string;
}

const OrderDetailsItemMobile: React.FC<OrderDetailsItemMobileProps> = ({
	image,
	product,
	quantity,
	price,
	currency,
}) => {
	const t = useTranslations();
	return (
		<div className={`w-[95%] mx-4 px-3 flex flex-col mt-5`}>
			<div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<Image
					alt='product'
					src={image}
					width={115}
					height={115}
					className='w-[115px] h-[115px] object-contain border-[0.5px] border-gray-300 hover:border hover:border-black transition-all'
				/>
			</div>
			<div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<div className='flex justify-between'>
					<p className='font-raleway text-lg font-bold'>{t('Product')}:</p>
					<p className='font-nunito text-lg font-medium'>{t(product)}</p>
				</div>
			</div>
			<div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<div className='flex justify-between'>
					<p className='font-raleway text-lg font-bold'>{t('Quantity')}:</p>
					<p className='font-nunito text-lg font-semibold'>{quantity.toString()}</p>
				</div>
			</div>
			<div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<div className='flex justify-between'>
					<p className='font-raleway text-lg font-bold'>{t('Price')}:</p>
					<p className='font-nunito text-lg font-semibold'>{price} {currency}</p>
				</div>
			</div>
			{/* <div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<div className='flex justify-between'>
					<p className='font-raleway text-lg font-bold'>{t('Size')}:</p>
					<p className='font-nunito text-lg font-semibold'>{t(size)}</p>
				</div>
			</div> */}
		</div>
	);
};

export default OrderDetailsItemMobile;

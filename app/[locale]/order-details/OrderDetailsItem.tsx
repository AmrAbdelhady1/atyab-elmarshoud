import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

interface OrderDetailsItemProps {
	image: StaticImageData;
	product: string;
	quantity: number;
	price: string;
	size: string;
}

const OrderDetailsItem: React.FC<OrderDetailsItemProps> = ({
	image,
	product,
	quantity,
	price,
	size,
}) => {
	const t = useTranslations();
	return (
		<tr className='text-center flex items-center justify-between py-6 border-b-[1px] border-[#e0e0e0]'>
			<td className='flex flex-col items-center justify-center flex-[0.15]'>
				<Image alt='product image' src={image} className='w-[84px]' />
			</td>
			<td className='font-nunito text-sm font-semibold flex-[0.4] max-lg:text-base'>
				{t(product)}
			</td>
			<td className='font-nunito text-sm font-semibold flex-[0.15] max-lg:text-base'>
				{quantity.toString()}
			</td>
			<td className='font-nunito text-sm font-semibold flex-[0.15] max-lg:text-base'>
				{price}
			</td>
			<td className='text-white font-nunito text-sm font-semibold flex-[0.15] max-lg:text-base'>
				{t(size)}
			</td>
		</tr>
	);
};

export default OrderDetailsItem;

import React from 'react';
import { useTranslations } from 'next-intl';

interface OrderDetailsMobileProps {
	orderNumber: string;
	referenceNumber: string;
	paymentId: string;
	quantity: number;
	productsTotal: string;
	orderPlaced: string;
}

const OrderDetailsMobile: React.FC<OrderDetailsMobileProps> = ({
	orderNumber,
	referenceNumber,
	paymentId,
	quantity,
	productsTotal,
	orderPlaced,
}) => {
	const t = useTranslations();
	return (
		<div
			className={`w-[95%] mx-4 px-3 flex flex-col mt-5 bg-gray-100 rounded-md shadow-md`}>
			<div className='py-5'>
				<div className='flex justify-between'>
					<p className='font-raleway text-lg font-bold max-md:text-base'>
						{t('Order Number')}:
					</p>
					<p className='font-nunito text-lg font-medium max-md:text-base'>
						{orderNumber}
					</p>
				</div>
			</div>
			<div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<div className='flex justify-between'>
					<p className='font-raleway text-lg font-bold max-md:text-base'>
						{t('Reference Number')}:
					</p>
					<p className='font-nunito text-lg font-medium max-md:text-base'>
						{referenceNumber}
					</p>
				</div>
			</div>
			<div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<div className='flex justify-between'>
					<p className='font-raleway text-lg font-bold max-md:text-base'>
						{t('Payment ID')}:
					</p>
					<p className='font-nunito text-lg font-medium max-md:text-base'>
						{paymentId}
					</p>
				</div>
			</div>
			<div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<div className='flex justify-between'>
					<p className='font-raleway text-lg font-bold max-md:text-base'>
						{t('Quantity')}:
					</p>
					<p className='font-nunito text-lg font-medium max-md:text-base'>
						{quantity.toString()}
					</p>
				</div>
			</div>
			<div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<div className='flex justify-between'>
					<p className='font-raleway text-lg font-bold max-md:text-base'>
						{t('Products Total')}:
					</p>
					<p className='font-nunito text-lg font-medium max-md:text-base'>
						{productsTotal}
					</p>
				</div>
			</div>
			<div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<div className='flex justify-between'>
					<p className='font-raleway text-lg font-bold max-md:text-base'>
						{t('Order Placed')}:
					</p>
					<p className='font-nunito text-lg font-medium max-md:text-base'>
						{orderPlaced}
					</p>
				</div>
			</div>
		</div>
	);
};

export default OrderDetailsMobile;

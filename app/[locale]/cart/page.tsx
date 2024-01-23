'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { PreLoader } from '@/components';
import PageHeader from '@/components/PageHeader';
import CartItemMobile from './CartItemMobile';
import CartItem from './CartItem';

import { IoIosInformationCircleOutline } from 'react-icons/io';

interface Gallery {
	url: string;
	name: string | null;
}

interface Category {
	id: number;
	name: string;
	image: string;
	featured: number;
	active: number;
	sort: number;
}

interface Product {
	id: number;
	category_id: number;
	name: string;
	image: string;
	price: number;
	purchasable_type: string;
	purchusable: number;
	quantity: number;
	weight: number;
	featured: boolean;
	views: number;
	sort: number;
	sold: number;
	gallery: Gallery[];
	is_favorite: boolean;
	ingredients: string;
	description: string;
	discount: number;
	category: Category;
	url: string;
}

interface cartItem {
	id: number;
	cart_id: number;
	product_id: number;
	price: number;
	currency_iso: string;
	quantity: number;
	product: Product;
}

const page = () => {
	const t = useTranslations();
	const cart = useSelector((state: any) => state.CartReducer);
	const cartItems = cart.items;
	// console.log('cartItems: ', cartItems);

	const [isMobileView, setIsMobileView] = useState<boolean>(false);

	const checkMobileView = () => {
		setIsMobileView(window.innerWidth < 1000);
	};

	useEffect(() => {
		checkMobileView(); // Check on initial render
		window.addEventListener('resize', checkMobileView);
		return () => {
			window.removeEventListener('resize', checkMobileView);
		};
	}, []);

	return (
		<>
			<PreLoader />

			{cartItems.length === 0 && (
				<div className='w-[90%] h-[90vh] flex items-center justify-start mx-14 max-md:mx-5'>
					<div className='h-[50%] flex flex-col gap-20 items-start w-full'>
						<div className='flex items-center gap-5 border border-[#6396d0] w-full p-5'>
							<IoIosInformationCircleOutline color='#6396d0' size={30} />
							<p className='font-nunito text-[#616161] text-lg'>
								{t('Your cart is currently empty.')}
							</p>
						</div>
						<Link
							href='/category/5'
							className='border border-black font-raleway font-bold text-sm py-5 px-10 hover:text-white hover:bg-black transition-all duration-300'>
							{t('RETURN TO SHOP')}
						</Link>
					</div>
				</div>
			)}

			{cartItems.length !== 0 && (
				<>
					{/* Header */}
					<PageHeader
						bgImgClassName='header-img'
						firstText='Organic Cosmetic'
						firstTextClassName='font-quentin'
						secondText='Shop Cart'
					/>

					{/* Content */}
					{!isMobileView ? (
						<div className='mx-[119.6px] my-[150px] max-w-full flex flex-col gap-10 items-start justify-center'>
							<table className='w-full border-t-[1px] border-[#e0e0e0]'>
								<thead>
									<tr className='text-left flex items-center justify-between py-6 border-b-[1px] border-[#e0e0e0]'>
										<th className='text-white flex-[0.7]'>{t('remove')}</th>
										<th className='text-white flex-[0.5] mr-20'>{t('product image')}</th>
										<th className='flex-1 font-raleway text-xl font-medium'>
											{t('Product')}
										</th>
										<th className='flex-[0.8] font-raleway text-xl font-medium'>
											{t('Price')}
										</th>
										<th className='flex-1 font-raleway text-xl font-medium'>
											{t('Quantity')}
										</th>
										<th className='flex-1 font-raleway text-xl font-medium'>
											{t('Subtotal')}
										</th>
									</tr>
								</thead>
								<tbody>
									{cartItems!.map((cartItem: cartItem) => (
										<CartItem key={cartItem.product_id} cartItem={cartItem} />
									))}
								</tbody>
							</table>

							{/* Coupon and Update Cart */}
							<div className='flex items-center justify-between w-full'>
								<div className='flex gap-4'>
									<input
										type='text'
										placeholder={t('Coupon Code')}
										className='max-w-[230px] h-[62px] py-[12px] px-[17px] border border-[#cfc8d8] font-nunito text-base text-[#cfc8d8]'
									/>
									<button className='animate-button !px-9'>{t('APPLY COUPON')}</button>
								</div>
								<button className='animate-button !px-9 !py-[1.1rem]'>
									<Link href='/category/5'>{t('UPDATE CART')}</Link>
								</button>
							</div>

							{/* Checkout */}
							<div className='w-full flex justify-end mt-14'>
								<div className='w-[400px] flex flex-col gap-8'>
									<h2 className='mb-3 font-raleway font-normal text-3xl'>
										{t('Cart Total')}
									</h2>
									<div className='flex justify-between'>
										<p className='font-raleway font-medium text-xl'>{t('Subtotal')}</p>
										<p className='font-nunito font-medium text-xl'>{cart.total}</p>
									</div>
									<div className='flex justify-between'>
										<p className='font-raleway font-medium text-xl'>{t('Total')}</p>
										<p className='font-nunito font-bold text-xl'>{cart.total}</p>
									</div>
									<Link href='/checkout' className='animate-button !py-5'>
										{t('PROCESS TO CHECKOUT')}
									</Link>
								</div>
							</div>
						</div>
					) : (
						<>
							{/* mobile view */}
							<div className='mb-36'>
								{cartItems!.map((cartItem: cartItem, index: number) => (
									<CartItemMobile
										key={cartItem.product_id}
										cartItem={cartItem}
										index={index}
									/>
								))}
								<div className='w-[95%] mx-4 px-3 flex flex-col'>
									<div className='bg-[#F9F9F9] pt-10'>
										<div className='flex flex-col gap-8'>
											<input
												type='text'
												placeholder={t('Coupon Code')}
												className='w-full h-[62px] py-[10px] px-[17px] border border-[#cfc8d8] font-nunito text-base text-[#cfc8d8]'
											/>
											<button className='animate-button'>{t('APPLY COUPON')}</button>
											<button className='animate-button'>
												<Link href='shop/catalog'>{t('UPDATE CART')}</Link>
											</button>
										</div>
									</div>
									<div className='w-full flex flex-col gap-8 px-2 mt-16'>
										<h2 className='mb-3 font-raleway font-normal text-2xl'>
											{t('Cart Total')}
										</h2>
										<div className='flex justify-between'>
											<p className='font-raleway font-semibold text-xl'>
												{t('Subtotal')}:
											</p>
											<p className='font-nunito font-medium text-xl'>{cart.total}</p>
										</div>
										<div className='flex justify-between'>
											<p className='font-raleway font-semibold text-xl'>{t('Total')}:</p>
											<p className='font-nunito font-bold text-xl'>{cart.total}</p>
										</div>
										<button className='animate-button'>
											<Link href='/checkout'>{t('PROCESS TO CHECKOUT')}</Link>
										</button>
									</div>
								</div>
							</div>
						</>
					)}
				</>
			)}
		</>
	);
};

export default page;

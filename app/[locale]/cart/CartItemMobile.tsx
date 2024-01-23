'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import {
	removeFromCart,
	getTotal,
	addToCart,
	decreaseCart,
	addToCartAsync,
	fetchCartProducts,
	removeFromCartAsync,
} from '@/redux/reducers/cartReducer';

import { IoCloseOutline } from 'react-icons/io5';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useAppDispatch } from '@/redux/hooks/hooks';

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

interface CartItemProps {
	cartItem: cartItem;
	index: number;
}

const CartItemMobile: React.FC<CartItemProps> = ({ cartItem, index }) => {
	const t = useTranslations();
	const dispatch = useAppDispatch();
	const product_id = cartItem?.product_id;

	const handleIncreaseProduct = async () => {
		const quantity = 1;
		await dispatch(addToCartAsync({ product_id, quantity }));
		await dispatch(fetchCartProducts());
	};

	const handleDecreaseProduct = async () => {
		const quantity = -1;
		await dispatch(addToCartAsync({ product_id, quantity }));
		await dispatch(fetchCartProducts());
	};

	const removeProduct = async () => {
		await dispatch(removeFromCartAsync({ product_id }));
		await dispatch(fetchCartProducts());
	};

	return (
		<div
			className={`w-[95%] mx-4 px-3 flex flex-col mt-5 ${
				index % 2 !== 0 && 'bg-[#F9F9F9]'
			}`}>
			<div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<IoCloseOutline
					className='hover:text-[#eaaa85] transition-all duration-500'
					size={25}
					onClick={() => removeProduct()}
				/>
			</div>
			<div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<Image
					alt='product'
					src={cartItem.product.image}
					width={100}
					height={100}
					className='w-[115px] h-[115px] object-contain border-[0.5px] border-gray-300 hover:border hover:border-black transition-all'
				/>
			</div>
			<div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<div className='flex justify-between'>
					<p className='font-raleway text-lg font-bold'>{t('Product')}:</p>
					<p className='font-raleway text-lg font-medium cursor-pointer hover:text-[#eaaa85] transition-all duration-500'>
						<Link href='/product/5'>{cartItem.product.name}</Link>
					</p>
				</div>
			</div>
			<div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<div className='flex justify-between'>
					<p className='font-raleway text-lg font-bold'>{t('Price')}:</p>
					<p className='font-nunito text-lg font-semibold'>
						{cartItem.product.price}
					</p>
				</div>
			</div>
			<div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<div className='flex justify-between'>
					<p className='font-raleway text-lg font-bold'>{t('Quantity')}:</p>
					<div className='flex gap-3 items-center justify-center'>
						<button
							className='border border-black font-normal p-3 hover:text-white hover:bg-black transition-all duration-300'
							onClick={handleDecreaseProduct}>
							<FaMinus size={12} />
						</button>
						<p className='border border-black font-normal p-1.5 px-3'>
							{cartItem.quantity}
						</p>
						<button
							className='border border-black font-normal p-3 hover:text-white hover:bg-black transition-all duration-300'
							onClick={handleIncreaseProduct}>
							<FaPlus size={12} />
						</button>
					</div>
				</div>
			</div>
			<div className='border-t-[1px] border-[#e0e0e0] py-5'>
				<div className='flex justify-between'>
					<p className='font-raleway text-lg font-bold'>{t('Subtotal')}:</p>
					<p className='font-nunito text-lg font-semibold text-[#eaaa85]'>
						{cartItem.product.price * cartItem.quantity}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CartItemMobile;

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useAppDispatch } from '@/redux/hooks/hooks';

import {
	addToCartAsync,
	fetchCartProducts,
	removeFromCartAsync,
} from '@/redux/reducers/cartReducer';

import { IoCloseOutline } from 'react-icons/io5';
import { FaMinus, FaPlus } from 'react-icons/fa';

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
	currency: string;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem, currency }) => {
	//console.log('cart item : ', cartItem);
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
		<tr className='text-left flex items-center justify-between py-6 border-b-[1px] border-[#e0e0e0]'>
			<th className='flex-[0.7] flex items-center justify-center'>
				<IoCloseOutline
					className='hover:text-[#eaaa85] transition-all duration-500'
					size={30}
					onClick={() => removeProduct()}
				/>
			</th>
			<th className='flex-[0.5] flex items-center justify-center mr-20'>
				<Image
					alt='product'
					src={cartItem.product.image}
					width={100}
					height={100}
					className='hover:border hover:border-black transition-all'
				/>
			</th>
			<th className='flex-1 font-raleway text-lg font-medium cursor-pointer hover:text-[#eaaa85] transition-all duration-500'>
				<Link href={`/product/${cartItem.product.id}`}>
					{cartItem.product.name}
				</Link>
			</th>
			<th className='flex-[0.8] font-nunito text-lg font-semibold'>
				{cartItem.product.price + ' ' + currency}
			</th>
			<th
				className={`flex-1 font-raleway text-xl font-medium flex items-center ${
					t('local') === 'ar' ? 'justify-end' : 'justify-start'
				}`}>
				<div className='flex gap-3 items-center justify-center'>
					<button
						className='border border-black font-normal p-3 hover:text-white hover:bg-black transition-all duration-300'
						onClick={handleDecreaseProduct}>
						<FaMinus size={12} />
					</button>
					<p className='border border-black font-normal p-1 px-3'>
						{cartItem.quantity}
					</p>
					<button
						className='border border-black font-normal p-3 hover:text-white hover:bg-black transition-all duration-300'
						onClick={handleIncreaseProduct}>
						<FaPlus size={12} />
					</button>
				</div>
			</th>
			<th className='flex-1 font-nunito text-lg font-semibold text-[#eaaa85]'>
				{cartItem.product.price * cartItem.quantity + ' ' + currency}
			</th>
		</tr>
	);
};

export default CartItem;

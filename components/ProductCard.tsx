'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import { useAppDispatch } from '@/redux/hooks/hooks';

import {
	addToCartAsync,
	fetchCartProducts,
} from '@/redux/reducers/cartReducer';

import { FaStar } from 'react-icons/fa';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { updateData } from '@/axios/axiosClient';

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

interface ProductCardProps {
	id?: number;
	productName?: string;
	currency?: string;
	price?: number | string;
	image?: string | StaticImageData;
	sale?: boolean;
	priceAfterDiscount?: number | string;
	isWishlist?: boolean;
	discount?: number | string;
	wrapperClassName?: string;
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
	product,
	currency,
	wrapperClassName,
	isWishlist,
}) => {
	const t = useTranslations();
	const dispatch = useAppDispatch();

	const [isLiked, setIsLiked] = useState(product?.is_favorite);
	const product_id = product?.id;
	const quantity = 1;

	const handleAddProductToCart = async () => {
		await dispatch(addToCartAsync({ product_id, quantity }));
		await dispatch(fetchCartProducts());
		// dispatch(getTotal());
		// console.log('cart items: ', cart.cartItems);
	};

	// useEffect(() => {
	// }, [dispatch]);

	const handleWishList = async (id: number) => {
		const url = isLiked ? 'add-favourites' : 'add-favourites';
		const res = await updateData('', `${url}/${id}`);

		if (res) {
			setIsLiked(!isLiked);
		}
	};

	return (
		<div className={`${wrapperClassName} flex flex-col gap-8 items-center group`}>
			<div className='relative flex items-center justify-center'>
				<Image
					alt='product Image'
					src={product?.image}
					width={200}
					height={300}
					className='object-contain w-[200px] h-[300px]'
				/>
				<div className='border border-black w-[115%] h-[90%] absolute ease-in-out duration-700 group-hover:w-full group-hover:h-full'></div>

				<div className='absolute top-2 right-4'>
					{!isLiked ? (
						<BsHeart
							size={25}
							onClick={() => handleWishList(product.id)}
							className='fade-in group-hover:opacity-100'
						/>
					) : (
						<BsHeartFill
							size={25}
							color='#339994'
							onClick={() => handleWishList(product.id)}
						/>
					)}
				</div>

				{product?.discount !== 0 && (
					<div className='bg-[#1e1e1e] w-[60px] h-[28px] flex items-center justify-center absolute top-[30px] left-0'>
						<p className='text-white font-raleway text-[13px] font-medium'>
							{t('SALE')}
						</p>
					</div>
				)}
			</div>
			<div className='flex gap-0.5 items-center justify-center'>
				<FaStar color='#ffa16a' size={15} />
				<FaStar color='#ffa16a' size={15} />
				<FaStar color='#ffa16a' size={15} />
				<FaStar color='#ffa16a' size={15} />
				<FaStar color='#ffa16a' size={15} />
			</div>
			<Link
				href={`/product/${product_id}`}
				className='text-xl font-light break-words overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[20ch] hover:text-primary hover:scale-105 transition-all duration-500'>
				{product?.name}
			</Link>
			<div className='flex gap-0 w-full justify-center'>
				{!product?.is_favorite && (
					<button
						onClick={handleAddProductToCart}
						style={{
							backgroundImage: 'linear-gradient(135deg, #339994 50%, transparent 51%)',
						}}
						className='animate-button !py-4 !px-3 whitespace-nowrap w-full'>
						{t('ADD TO CART')}
					</button>
				)}
				{product?.discount === 0 ? (
					<button
						className={`border border-black py-4 px-4 text-primary text-sm font-bold w-full
						${!product?.is_favorite && (t('local') === 'ar' ? 'border-r-0' : 'border-l-0')}
          `}>
						{product?.price + ' ' + currency}
					</button>
				) : (
					<button
						className={`border border-black justify-center py-4 px-4 text-primary text-sm font-bold flex gap-2 w-full
						${!product?.is_favorite && (t('local') === 'ar' ? 'border-r-0' : 'border-l-0')}
          `}>
						<p className='line-through text-[#969696]'>{product?.price}</p>
						<p>{product?.discount}</p>
					</button>
				)}
			</div>
		</div>
	);
};

export default ProductCard;

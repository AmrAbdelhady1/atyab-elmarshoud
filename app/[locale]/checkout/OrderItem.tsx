import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useDispatch } from 'react-redux';

import {
	removeFromCart,
	getTotal,
	removeFromCartAsync,
	fetchCartProducts,
} from '@/redux/reducers/cartReducer';

import { IoCloseOutline } from 'react-icons/io5';
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

interface OrderItemProps {
	cartItem: cartItem;
}

const OrderItem: React.FC<OrderItemProps> = ({ cartItem }) => {
	const t = useTranslations();
	const dispatch = useAppDispatch();
	const product_id = cartItem?.product_id;

	const removeProduct = async () => {
		await dispatch(removeFromCartAsync({ product_id }));
		await dispatch(fetchCartProducts());
	};

	let productSubtotal = cartItem.product.price * cartItem.quantity;
	return (
		<div className='flex gap-4'>
			<div className='flex-[0.2]'>
				<Image
					alt='product image'
					src={cartItem.product.image}
					width={100}
					height={100}
					className='w-[75px] border border-gray-300 hover:border hover:border-black transition-all duration-300'
				/>
			</div>
			<div className='flex-[0.5] flex flex-col justify-center gap-2'>
				<p className='font-raleway font-medium text-lg cursor-pointer hover:text-[#6396d0] transition-all duration-300'>
					<Link href='/product'>{cartItem.product.name}</Link>
				</p>
				<p className='font-nunito font-semibold text-base text-[#616161]'>
					{cartItem.product.price} x {cartItem.quantity}
				</p>
			</div>
			<div className='flex-[0.2] pt-2'>
				<p className='font-nunito font-semibold text-base text-[#6396d0]'>
					{productSubtotal}
				</p>
			</div>
			<div className='flex-[0.1] pt-2'>
				<IoCloseOutline
					size={20}
					className='text-[#6396d0] hover:text-black transition-all duration-300'
					onClick={() => removeProduct()}
				/>
			</div>
		</div>
	);
};

export default OrderItem;

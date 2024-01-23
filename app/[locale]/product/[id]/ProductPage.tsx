'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import ProductCard from '@/components/ProductCard';
import { PreLoader } from '@/components';

import { FaCheckCircle, FaMinus, FaPlus, FaStar } from 'react-icons/fa';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { CiStar } from 'react-icons/ci';

import headerImage from '@/public/assets/images/product/header.png';
import profileImage from '@/public/assets/images/product/profile.png';

const DUMMY_PRODUCT = {
	id: 181,
	category_id: 9,
	name: 'MAMOOL MARSHOUD BLACK (Large Size )',
	image:
		'https://atyab-staging.cryptdev.com/storage/upload/products/n5qMepc60GjTuA5Y0V6FVhY0k4iV80yNwkf0JEwp.png',
	price: 52,
	purchasable_type: 'unlimited',
	purchasable: 0,
	quantity: 0,
	weight: 0.41,
	featured: false,
	views: 6468,
	sort: 1,
	sold: 279,
	gallery: [
		{
			url: 'https://atyab-staging.cryptdev.com/storage/upload/products/n5qMepc60GjTuA5Y0V6FVhY0k4iV80yNwkf0JEwp.png',
			name: null,
		},
	],
	is_favorite: false,
	ingredients: 'Orange, Jasmine, Rose, Apple, Patchouli, Musk, Amber',
	description: 'This item contains 84g of Mamool',
	discount: 0,
	category: {
		id: 9,
		name: 'Home Fragrance',
		image:
			'http://127.0.0.1:8000/storage/upload/categories/LRnDr.Home Fragrance.jpg',
		featured: 1,
		active: 1,
		sort: 6,
	},
	url: 'http://127.0.0.1:8000/ar/181/product/%D9%85%D8%B9%D9%85%D9%88%D9%84%20%D9%85%D8%B1%D8%B4%D9%88%D8%AF%20%D8%A7%D8%B3%D9%88%D8%AF%20%28%D8%A7%D9%84%D8%AD%D8%AC%D9%85%20%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1%20%29',
};

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
	purchasable_type: number;
	purchasable: number;
	quantity: number;
	weight: number;
	featured: boolean;
	views: number;
	sort: number;
	sold: number;
	discount: number;
	ingredients: string;
	description: string;
	is_favorite: boolean;
	slug: string;
	category: Category;
}

interface ProductPageProps {
	recommendedProductsData: any[];
}

const ProductPage: React.FC<ProductPageProps> = ({
	recommendedProductsData,
}) => {
	const t = useTranslations();
	const [isLiked, setIsLiked] = useState(false);
	const [count, setCount] = useState(0);
	const [activeButton, setActiveButton] = useState('DESCRIPTION');

	const handleButtonClick = (button: string) => {
		setActiveButton(button);
	};

	const tags = DUMMY_PRODUCT.category.name.split(' ');
	const ingredientsArray = DUMMY_PRODUCT.ingredients.split(', ');

	return (
		<>
			<PreLoader />
			<div className='mb-10'>
				<Image alt='header image' src={headerImage} className='w-full' />

				<div className='mx-[119.5px] max-lg:m-4'>
					{/* Product Details */}
					<div className='flex gap-20 items-start justify-start mt-48 max-md:flex-col max-md:items-center'>
						<div className='relative flex flex-wrap items-center justify-center'>
							<Image
								alt='product image'
								src={DUMMY_PRODUCT.image}
								width={600}
								height={600}
								className='object-contain h-[70%] w-[70%]'
							/>

							<div className='h-[110%] w-[110%] border border-black absolute inset-auto'></div>
							{DUMMY_PRODUCT.discount === 0 && (
								<div className='bg-black px-5 py-2 absolute top-[5%] left-[-10%]'>
									<p className='text-white'>{t('SALE')}</p>
								</div>
							)}
						</div>
						<div className='flex flex-col gap-5 items-start justify-start'>
							<p className='text-[#616161] text-3xl font-normal max-w-[60ch]'>
								{t(DUMMY_PRODUCT.name)}
							</p>
							<div className='flex gap-5'>
								{DUMMY_PRODUCT.discount !== 0 && (
									<p className='text-xl font-normal line-through text-[#969696]'>
										{t('$27.00')}
									</p>
								)}
								<p className='text-xl font-normal text-[#339994]'>
									{t(`$${DUMMY_PRODUCT.price}`)}
								</p>
							</div>
							<div className='flex gap-0.5'>
								<FaStar color='#ffa16a' />
								<FaStar color='#ffa16a' />
								<FaStar color='#ffa16a' />
								<FaStar color='#ffa16a' />
								<FaStar color='#ffa16a' />
							</div>
							<p className='text-[#616161] text-base font-normal max-w-[60ch] leading-[1.875em]'>
								{DUMMY_PRODUCT.description}
							</p>
							<div className='flex gap-2 items-center justify-center mt-10'>
								<p className='text-sm font-semibold'>VIEWS: </p>
								<p className='text-md font-light'>{DUMMY_PRODUCT.views}</p>
							</div>
							<div className='flex gap-2 items-center justify-center'>
								<p className='text-sm font-semibold'>CATEGORY: </p>
								<p className='text-md font-light'>{DUMMY_PRODUCT.category.name}</p>
							</div>
							<div className='flex gap-2 items-center justify-center'>
								<p className='text-sm font-semibold'>TAGS: </p>
								{tags.map((word, index) => (
									<Link
										key={index}
										href={`/category/${DUMMY_PRODUCT.category.id}`}
										className='text-md font-normal border border-black px-2 hover:border-none hover:bg-[#339994] transition-all duration-500'>
										{word}
									</Link>
								))}
							</div>
							<div className='flex gap-3 items-center justify-center mt-10'>
								<button
									className='border border-black font-normal p-4 hover:text-white hover:bg-black transition-all duration-300'
									onClick={() =>
										setCount((prevCount: number) => {
											if (prevCount - 1 < 0) {
												return 0;
											} else {
												return prevCount - 1;
											}
										})
									}>
									<FaMinus size={12} />
								</button>
								<p className='border border-black font-normal p-2.5 px-4'>{count}</p>
								<button
									className='border border-black font-normal p-4 hover:text-white hover:bg-black transition-all duration-300'
									onClick={() =>
										setCount((prevCount) => {
											return prevCount + 1;
										})
									}>
									<FaPlus size={12} />
								</button>
								<button className='animate-button'>{t('ADD TO CART')}</button>
								{!isLiked ? (
									<BsHeart
										className='mx-2'
										size={30}
										onClick={() => setIsLiked((prevState) => !prevState)}
									/>
								) : (
									<BsHeartFill
										className='mx-2'
										color='#339994'
										size={30}
										onClick={() => setIsLiked((prevState) => !prevState)}
									/>
								)}
							</div>
						</div>
					</div>

					{/* Description and Reviews */}
					<div className='flex flex-col gap-10 mt-32'>
						<div className='flex gap-0'>
							<button
								className={`border border-black py-4 px-12 tracking-wider text-sm font-bold max-md:py-2 max-md:px-6 ${
									activeButton === 'DESCRIPTION' ? 'bg-black text-white' : ''
								}`}
								onClick={() => handleButtonClick('DESCRIPTION')}>
								{t('DESCRIPTION')}
							</button>
							<button
								className={`border border-black py-4 px-12 tracking-wider text-sm font-bold max-md:py-2 max-md:px-6 ${
									activeButton === 'REVIEWS' ? 'bg-black text-white' : ''
								}`}
								onClick={() => handleButtonClick('REVIEWS')}>
								{t('REVIEWS (1)')}
							</button>
						</div>
						{activeButton === 'DESCRIPTION' ? (
							<div>
								<p className='text-[#616161] text-2xl font-normal max-w-[90ch] leading-[1.875em] mb-3'>
									DESCRIPTION
								</p>
								<p className='text-[#616161] text-base font-normal max-w-[90ch] leading-[1.875em]'>
									{DUMMY_PRODUCT.description}
								</p>
								<hr className='w-[25%] my-5' />
								<p className='text-[#616161] text-2xl font-normal max-w-[90ch] leading-[1.875em] mb-3'>
									INGREDIENTS
								</p>
								<ul>
									{ingredientsArray.map((ingredient) => (
										<li className='flex items-center justify-start gap-3 mb-5'>
											<FaCheckCircle color='#339994' size={20} />
											<p className='text-[#616161] text-base font-semibold'>
												{ingredient}
											</p>
										</li>
									))}
								</ul>
								<hr className='w-[25%] my-5' />
								<table className='max-w-[370px]'>
									<tbody>
										<tr className='bg-[#F3F3F3] text-left'>
											<th className='px-8 py-2 text-[#616161] text-lg'>{t('WEIGHT')}</th>
											<th className='px-8 py-2 text-[#616161] text-lg'>
												{DUMMY_PRODUCT.weight} kg
											</th>
										</tr>
										{/* <tr>
											<td className='pl-8 py-2 text-[#616161] text-lg'>
												{t('DIMENSIONS')}
											</td>
											<td className='pl-8 py-2 text-[#616161] text-lg'>
												{t('2 x 3 x 5 cm')}
											</td>
										</tr> */}
									</tbody>
								</table>
							</div>
						) : (
							<div className='flex flex-col gap-20 mt-10'>
								<div className='flex items-start gap-5'>
									<Image
										alt='profile picture'
										src={profileImage}
										className='rounded-full object-contain'
									/>
									<div className='flex flex-col gap-3'>
										<div className='flex gap-0.5'>
											<FaStar color='#ffa16a' />
											<FaStar color='#ffa16a' />
											<FaStar color='#ffa16a' />
											<FaStar color='#ffa16a' />
											<FaStar color='#ffa16a' />
										</div>
										<p className='text-xl font-normal'>John Doe</p>
										<p className='text-[#616161] text-base font-normal max-w-[80ch] leading-[1.875em]'>
											{t(
												'Duckbill gizzard shad redmouth whalefish yellowtail barracuda convict cichlid; saw shark yellowfin surgeonfish? Silver dollar salamanderfish longfin'
											)}
										</p>
										<p className='text-[#969696] text-sm font-normal'>
											{t('JANUARY 14, 2021')}
										</p>
									</div>
								</div>
								<div className='flex flex-col gap-5'>
									<h1 className='text-3xl text-slate-800 font-light'>
										{t('Add a review')}
									</h1>
									<p className='text-base text-[#616161]'>
										{t(
											'Your email address will not be published. Required fields are marked *'
										)}
									</p>
									<div className='flex gap-0.5'>
										<CiStar />
										<CiStar />
										<CiStar />
										<CiStar />
										<CiStar />
									</div>
									<textarea
										cols={45}
										rows={5}
										className='border-[0.1px] border-slate-300 max-w-[120ch] h-[180px] px-[17px] py-[14px]'
										placeholder={t('Your review')}></textarea>
									<input
										id='author'
										name='author'
										type='text'
										placeholder={t('Your Full Name')}
										className='border-[0.1px] border-slate-300 max-w-[120ch] h-[60px] px-[17px] py-[14px]'
										size={30}></input>
									<input
										id='email'
										name='email'
										type='text'
										placeholder={t('Your Email')}
										className='border-[0.1px] border-slate-300 max-w-[120ch] h-[60px] px-[17px] py-[14px]'
										size={30}></input>
									<div className='flex gap-3'>
										<input type='checkbox' />
										<p className='text-[#616161]'>
											{t(
												'Save my name, email, and website in this browser for the next time I comment.'
											)}
										</p>
									</div>
									<button className='animate-button !max-w-48'>{t('SUBMIT')}</button>
								</div>
							</div>
						)}
					</div>

					{/* Best Sellers Products */}
					<div className='mt-60'>
						<h1 className='text-5xl font-extralight text-[#232323] break-words max-md:text-3xl'>
							{t('RECOMMENDED PRODUCTS')}
						</h1>
						<div className='flex flex-wrap items-center justify-evenly gap-[4rem] mt-10 max-md:flex-col max-md:items-center max-md:justify-center'>
							{recommendedProductsData.map((product) => (
								<div className='max-w-[15rem]'>
									<ProductCard
										image={product.image}
										productName={product.name}
										price={product.price}
										discount={product.discount}
										sale={product.discount === 0 ? false : true}
										product={product}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductPage;

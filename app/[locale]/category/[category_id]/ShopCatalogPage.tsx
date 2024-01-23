'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import { PreLoader } from '@/components';
import { FormControl, OutlinedInput, Slider } from '@mui/material';

import { FaStar, FaCircle } from 'react-icons/fa';

import sideSplash2Image from '@/public/assets/images/about-us/sidesplash2.png';

import './style.css';
import { BASE_URL } from '@/constants/constants';

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

interface ShopCatalogPageProps {
	categoriesData: Category[];
	productsData: Product[];
	categoryId: string;
	locale: string;
}

const newArrivals = [
	{
		prodName: 'Marshoud 4 White',
		image:
			'https://atyab-staging.cryptdev.com/storage/upload/products/BSVVuEkZepBdEBj6xp8aeUDtEIpw9zjbDzt2m4wW.png',
		price: 89,
		newPrice: 0,
	},
	{
		prodName: 'Marshoud 4 Blue',
		image:
			'https://atyab-staging.cryptdev.com/storage/upload/products/6d8Zt.Marshoud 4 Blue 100ml.png',
		price: 96,
		newPrice: 0,
	},
	{
		prodName: 'Marshoud 4 Black',
		image:
			'https://atyab-staging.cryptdev.com/storage/upload/products/jMtVvIplVnBNCMXPBmltD7wr30lpExfHdPNRFPUU.png',
		price: 89,
		newPrice: 0,
	},
];

const sort = [
	{ name: 'Default', value: 'default' },
	{ name: 'Alpha A - Z', value: 'a_to_z' },
	{ name: 'Alpha Z -A', value: 'z_to_a' },
	{ name: 'Price from low to high', value: 'low_to_high' },
	{ name: 'Price from high to low', value: 'high_to_low' },
	{ name: 'Newest', value: 'newest' },
];

const productTags = ['Cosmetic', 'FaceCare', 'Perfume', 'Skincare'];

const ShopCatalogPage: React.FC<ShopCatalogPageProps> = ({
	categoriesData,
	productsData,
	categoryId,
	locale,
}) => {
	const router = useRouter();
	const t = useTranslations();

	const [sliderValue, setSliderValue] = useState([20, 100]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [filter, setFilter] = useState<string>('Default');
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [filteredProducts, setFilteredProducts] =
		useState<Product[]>(productsData);

	const sliderChangeHandler = (event: Event, newValue: number | number[]) => {
		setSliderValue(newValue as number[]);
	};

	const getSortedProducts = async (filter: string) => {
		// console.log('fetching sorted products...');
		setIsLoading(true);
		try {
			const response = await fetch(
				`${BASE_URL}/products?category_id=${categoryId}&filter=${filter}`,
				{
					headers: {
						locale,
					},
				}
			);
			const sortedProducts = await response.json();
			setFilteredProducts(sortedProducts.data);
			setIsLoading(false);
		} catch (error) {
			console.log('An error occurred while fetching products.');
			console.log(error);
		}
	};

	const filterProducts = (query: string) => {
		const lowerCaseQuery = query.toLowerCase();
		const filtered = productsData.filter((product) => {
			// Add your filtering logic here, for example, filtering by product name
			const productName = product.name.toLowerCase();
			return productName.includes(lowerCaseQuery);
		});
		setFilteredProducts(filtered);
	};

	return (
		<>
			<PreLoader />
			<PageHeader
				bgImgClassName='header-img'
				firstText='Organic Cosmetic'
				firstTextClassName='font-quentin'
				secondText='Shop Catalog'
			/>

			<section className='lg:py-[100px] lg:px-[160px] md:py-14 md:px-8 flex justify-center items-start'>
				<section className='flex-[0.75] me-10'>
					<article className='flex justify-between flex-wrap'>
						<p className='m-5'>
							{t('SHOWING ')} {`1-${filteredProducts?.length} `} {t('Of ')}
							{/* {t(`SHOWING 1-${filteredProducts?.length} Of`)}{' '} */}
							{filteredProducts?.length} {t('RESULTS')}
						</p>
						<div className='flex gap-5 items-center'>
							<p>{t('Sort By')}: </p>
							<select
								name='sort'
								id='sort'
								className='m-5 border-b-2 w-[250px]'
								value={t(filter)}
								onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
									setFilter(event.target.value);
									getSortedProducts(event.target.value);
								}}>
								{sort.map((option) => (
									<option value={option.value} key={option.value}>
										{t(option.name)}
									</option>
								))}
							</select>
						</div>
					</article>
					{isLoading ? (
						<section className='flex-[0.75] me-10 h-screen w-full flex justify-center items-center'>
							<motion.img
								className='w-[100px] h-[100px]'
								src='https://atyabalmarshoud.com/web/assets/images/favicon/safari-pinned-tab.svg'
								animate={{ scale: ['100%', '70%', '100%'] }}
								transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity }}
							/>
						</section>
					) : (
						<article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10'>
							{filteredProducts?.map((product) => (
								<ProductCard
									key={product.id}
									// id={product.id}
									// image={product.image}
									// productName={product.name}
									// price={product.price}
									// discount={product.discount}
									// sale={product.discount === 0 ? false : true}
									product={product}
								/>
							))}
						</article>
					)}
				</section>
				<section className='cat-column flex-[0.25]'>
					<FormControl variant='outlined'>
						<OutlinedInput
							placeholder={t('Search Products')}
							id='outlined-adornment-weight'
							aria-describedby='outlined-weight-helper-text'
							inputProps={{
								'aria-label': 'weight',
							}}
							value={searchQuery}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								setSearchQuery(event.target.value);
								filterProducts(event.target.value);
							}}
						/>
					</FormControl>
					<article className='my-8'>
						<h2 className='text-[30px] font-extralight mb-3'>{t('Categories')}</h2>
						<ul>
							{categoriesData.map((category) => (
								<li
									className={`mb-4 flex items-center cursor-pointer hover:text-[#339994] hover:scale-105 transition-all ease-in-out ${
										categoryId === category.id.toString() && 'text-[#339994] scale-105'
									}`}
									key={category.id}
									onClick={() =>
										router.replace(`/category/${category.id}`, { scroll: false })
									}>
									<FaCircle size={8} />
									<span className='ms-2'>{category.name}</span>
								</li>
							))}
						</ul>
					</article>

					<article className='my-8 mx-3'>
						<h2 className='text-[30px] font-extralight mb-3'>
							{t('Filter by price')}
						</h2>

						<Slider
							getAriaLabel={() => 'Temperature range'}
							value={sliderValue}
							onChange={sliderChangeHandler}
							valueLabelDisplay='auto'
							min={10}
							max={40}
							step={10}
							style={{
								color: '#339994',
							}}
						/>

						<div className='flex justify-between items-center'>
							<p>
								{t('PRICE')}: ${sliderValue[0]} - ${sliderValue[1]}
							</p>
							<button className='animate-button !h-[55px] !bg-transparent'>
								{t('Filter')}
							</button>
						</div>
					</article>

					<article className='my-8'>
						<h2 className='text-[30px] font-extralight mb-3'>
							{t('Meet New Arrivals')}
						</h2>

						{newArrivals.map((el, index) => {
							return (
								<div className='flex mb-5' key={index}>
									<Image
										alt={`Product Name ${index}`}
										src={el.image}
										width={70}
										height={70}
										className='me-6 w-[70px] h-[70px]'
									/>
									<div className='flex flex-col items-start justify-between'>
										<p>{t(el.prodName)}</p>
										{el.newPrice ? (
											<div className='flex'>
												<p className='line-through me-3'>${el.price}</p>
												<p>${el.newPrice}</p>
											</div>
										) : (
											<p className=' text-center'>{el.price}</p>
										)}
										<div className='flex gap-0.5 items-center justify-center'>
											<FaStar color='#D5D5D5' size={15} />
											<FaStar color='#D5D5D5' size={15} />
											<FaStar color='#D5D5D5' size={15} />
											<FaStar color='#D5D5D5' size={15} />
											<FaStar color='#D5D5D5' size={15} />
										</div>
									</div>
								</div>
							);
						})}
					</article>

					<article className='my-8'>
						<h2 className='text-[30px] font-extralight mb-3'>{t('Product tags')}</h2>

						<div className='flex flex-wrap'>
							{productTags.map((tag, index) => (
								<div key={index} className='flex items-center mb-3 me-3'>
									<p className='border-black border-2 px-4 py-2 gap-2 product-tag'>
										{t(tag)}
									</p>
									{index % 2 === 1 && <div className='w-4' />}{' '}
								</div>
							))}
						</div>
					</article>

					<Image alt='side splash 2' src={sideSplash2Image} />
				</section>
			</section>
		</>
	);
};

export default ShopCatalogPage;

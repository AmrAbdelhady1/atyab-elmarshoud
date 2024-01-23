'use client';

import { useTranslations } from 'next-intl';

import ProductCard from '../ProductCard';
import product1Image from '@/public/assets/images/product/product1.jpg';
import product2Image from '@/public/assets/images/product/product2.jpg';
import product3Image from '@/public/assets/images/product/product3.jpg';
import product4Image from '@/public/assets/images/product/product4.jpg';

const BestProducts = () => {
	const t = useTranslations();
	return (
		<div className='mt-36 text-[#232323] text-center'>
			<div className='relative mb-52'>
				<img
					src='https://8ded8880.rocketcdn.me/themes/cosmecos-new/wp-content/uploads/2021/02/home2-bg-13.jpg'
					alt='banner'
					className='object-cover h-[250px]'
				/>
				<div className='absolute py-2 top-0 bottom-0 left-0 right-0 m-auto flex gap-2 flex-col lg:flex-row items-start lg:items-center px-2 lg:px-40 justify-between text-start'>
					<div>
						<p className='text-[34px] lg:text-[60px] font-light font-raleway'>
							{t('Find Your Beauty Guide')}
						</p>
						<p>
							{t(
								'Cosmecos is committed to cruelty-free product formulation, & testing'
							)}
						</p>
					</div>

					<button className='animate-button h-[40px] w-[100px] lg:h-[60px] lg:w-[170px] !bg-transparent'>
						{t('Find out')}
					</button>
				</div>
			</div>

			<h1 className='text-primary font-quentin text-[24px] lg:text-[35px] mb-2'>
				{t('Best products')}
			</h1>
			<p className='text-[#232323] text-[28px] lg:text-[38px] font-light font-raleway mb-4'>
				{t('BEST SELLERS PRODUCTS')}
			</p>
			<p className='text-[#9a9a9a] text-base lg:text-lg mb-20 tracking-wide'>
				{t('The stylish and organized cosmetic products')}
			</p>

			<div className='grid grid-cols-1 items-center my-10 md:my-20 lg:my-32 xl:my-40 px-5 gap-10 md:grid-cols-2 lg:grid-cols-4 2xl:px-[300px]'>
				<ProductCard
					image={product1Image}
					productName='Perfect Concealer'
					price='$28.00'
					priceAfterDiscount='$0'
					sale={false}
				/>
				<ProductCard
					image={product2Image}
					productName='Dropper Beard Oil'
					price='$28.00'
					priceAfterDiscount='$0'
					sale={false}
				/>
				<ProductCard
					image={product3Image}
					productName='Face Cream'
					price='$27.00'
					priceAfterDiscount='$15.00'
					sale={true}
				/>
				<ProductCard
					image={product4Image}
					productName='Face Day Cream'
					price='$28.00'
					priceAfterDiscount='$20.00'
					sale={true}
				/>
				<ProductCard
					image={product1Image}
					productName='Perfect Concealer'
					price='$28.00'
					priceAfterDiscount='$0'
					sale={false}
				/>
				<ProductCard
					image={product2Image}
					productName='Dropper Beard Oil'
					price='$28.00'
					priceAfterDiscount='$0'
					sale={false}
				/>
				<ProductCard
					image={product3Image}
					productName='Face Cream'
					price='$27.00'
					priceAfterDiscount='$15.00'
					sale={true}
				/>
				<ProductCard
					image={product4Image}
					productName='Face Day Cream'
					price='$28.00'
					priceAfterDiscount='$20.00'
					sale={true}
				/>
			</div>

			<button className='animate-button w-[180px] h-[50px] mb-52 mx-auto'>
				{t('Explore more')}
			</button>
		</div>
	);
};

export default BestProducts;

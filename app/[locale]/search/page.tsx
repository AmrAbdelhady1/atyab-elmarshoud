'use client';

import { PreLoader, ProductCard } from '@/components';
import PageHeader from '@/components/PageHeader';
import product1Image from '@/public/assets/images/product/product1.jpg';
import product2Image from '@/public/assets/images/product/product2.jpg';
import product3Image from '@/public/assets/images/product/product3.jpg';
import product4Image from '@/public/assets/images/product/product4.jpg';

import './style.css';

const Search = () => {
	return (
		<div>
			<PreLoader />
			<PageHeader
				bgImgClassName='header-img'
				firstText='Organic Perfumes'
				firstTextClassName='font-quentin'
				secondText='Search Results'
			/>

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
		</div>
	);
};

export default Search;

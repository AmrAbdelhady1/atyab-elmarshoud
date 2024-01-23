import { BASE_URL_NO_API } from '@/constants/constants';

import ProductPage from './ProductPage';

async function getRecommendedProducts() {
	// /recommended-products?category_id=5
	let categoryID = 5;
	try {
		const response = await fetch(
			`${BASE_URL_NO_API}/recommended-products?category_id=9`,
			{
				headers: {
					locale: global?.localStorage?.getItem('i18nextLng') || 'en',
				},
				cache: 'no-store',
			}
		);
		const recommendedProducts = await response.json();
		return recommendedProducts.data;
	} catch (error) {
		console.log('Error fetching recommended products.');
		console.log(error);
	}
}

const page = async () => {
	const recommendedProductsData = await getRecommendedProducts();
	return (
		<>
			<ProductPage recommendedProductsData={recommendedProductsData} />
		</>
	);
};

export default page;

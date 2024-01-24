import { BASE_URL, BASE_URL_NO_API } from '@/constants/constants';

import ProductPage from './ProductPage';
import { getCookie } from '@/app/actions';

async function getProduct(product_id: string, locale: string) {
	try {
		const response = await fetch(`${BASE_URL}/products/${product_id}`, {
			headers: {
				locale,
			},
			cache: 'no-store',
		});
		const product = await response.json();

		return product.data;
	} catch (error) {
		console.log('Error fetching product.');
		console.log(error);
	}
}

async function getRecommendedProducts(category_id: number, locale: string) {
	try {
		const response = await fetch(
			`${BASE_URL_NO_API}/recommended-products?category_id=${category_id}`,
			{
				headers: {
					locale,
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

const page = async ({
	params,
}: {
	params: { product_id: string; locale: string };
}) => {
	const currency = await getCookie('currency');
	const productData = await getProduct(params.product_id, params.locale);

	const categoryId = productData?.category_id;

	if (!categoryId) {
		console.log('Category ID not found.');
		return null; // Handle this error case as needed
	}

	const recommendedProductsData = await getRecommendedProducts(
		categoryId,
		params.locale
	);
	return (
		<>
			<ProductPage
				currency={currency}
				recommendedProductsData={recommendedProductsData}
				productData={productData}
			/>
		</>
	);
};

export default page;

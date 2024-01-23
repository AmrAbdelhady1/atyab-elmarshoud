import { BASE_URL } from '@/constants/constants';
import ShopCatalogPage from './ShopCatalogPage';

async function getCategories(locale: string) {
	try {
		const response = await fetch(`${BASE_URL}/categories`, {
			headers: {
				locale,
			},
		});
		const categories = await response.json();
		return categories.data;
	} catch (error) {
		console.log('Error fetching categories.');
		console.log(error);
	}
}

async function getProducts(category_id: string, locale: string) {
	try {
		const response = await fetch(
			`${BASE_URL}/products?category_id=${category_id}`,
			{
				headers: {
					locale,
				},
			}
		);
		const products = await response.json();
		return products.data;
	} catch (error) {
		console.log('An error occurred while fetching products.');
		console.log(error);
	}
}

const page = async ({
	params,
}: {
	params: { category_id: string; locale: string };
}) => {
	const categoriesData = await getCategories(params.locale);
	const productsData = await getProducts(params.category_id, params.locale);
	return (
		<>
			<ShopCatalogPage
				productsData={productsData}
				categoriesData={categoriesData}
				categoryId={params.category_id}
				locale={params.locale}
			/>
		</>
	);
};

export default page;

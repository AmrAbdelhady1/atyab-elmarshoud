import React from 'react';
import CartPage from './CartPage';
import { getCookie } from '@/app/actions';

const page = async () => {
	const currency = await getCookie('currency');
	return (
		<>
			<CartPage currency={currency} />
		</>
	);
};

export default page;

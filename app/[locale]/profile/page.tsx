import { getCookie } from '@/app/actions';
import Profile from './Profile';
import { BASE_URL } from '@/constants/constants';

async function getOrders(locale: string, token: string) {
	try {
		const response = await fetch(`${BASE_URL}/orders`, {
			headers: {
				locale,
				Authorization: `Bearer ${token}`,
			},
			cache: 'force-cache',
		});
		const orders = await response.json();
		return orders.data;
	} catch (error) {
		console.log('Error fetching orders.');
		console.log(error);
	}
}

async function getProfile(locale: string, token: string) {
	try {
		const response = await fetch(`${BASE_URL}/show-profile`, {
			headers: {
				locale,
				Authorization: `Bearer ${token}`,
			},
			cache: 'force-cache',
		});
		const profile = await response.json();
		return profile.data;
	} catch (error) {
		console.log('Error fetching profile.');
		console.log(error);
	}
}

async function getCountries(locale: string) {
	try {
		const response = await fetch(`${BASE_URL}/countries`, {
			headers: {
				locale,
			},
		});
		const countries = await response.json();
		return countries.data;
	} catch (error) {
		console.log('Error fetching countries.');
		console.log(error);
	}
}

async function getAddress(locale: string, token: string) {
	// console.log('token: ', token);
	try {
		const response = await fetch(`${BASE_URL}/addresses`, {
			headers: {
				locale,
				Authorization: `Bearer ${token}`,
			},
		});
		const address = await response.json();
		// console.log('address data: ', address.data);
		return address.data;
	} catch (error) {
		console.log('Error fetching address.');
		console.log(error);
	}
}

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
	const token = await getCookie('auth-token');
	const orders = await getOrders(locale, token);
	const profile = await getProfile(locale, token);
	const countriesData = await getCountries(locale);
	const addressData = await getAddress(locale, token);

	return (
		<Profile
			orders={orders}
			profile={profile}
			countries={countriesData}
			addressData={addressData}
		/>
	);
};

export default page;

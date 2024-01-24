import { BASE_URL, BASE_URL_NO_API } from '@/constants/constants';
import CheckoutPage from './CheckoutPage';
import { getCookie } from '@/app/actions';

async function getAddress(locale: string, token: string) {
	try {
		const response = await fetch(`${BASE_URL}/addresses`, {
			headers: {
				locale,
				Authorization: `Bearer ${token}`,
			},
		});
		const address = await response.json();
		// console.log(address.data);
		return address.data;
	} catch (error) {
		console.log('Error fetching address.');
		console.log(error);
	}
}

async function getCheckoutInfo(
	locale: string,
	token: string,
	addressId: number
) {
	try {
		const response = await fetch(`${BASE_URL}/checkout-info`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				locale,
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ address_id: addressId }),
		});
		const checkout = await response.json();
		// console.log('Checkout Data: ', checkout.data);
		return checkout.data;
	} catch (error) {
		console.log('Error fetching checkout data.');
		console.log(error);
	}
}

async function getPaymentMethods(locale: string, token: string) {

  try {
    const currencyId = await getCookie("currency_id");
    console.log("currencyId",currencyId);
    const response = await fetch(`${BASE_URL_NO_API}/payment_methods/${currencyId}`, {
      headers: {
        locale,
        Authorization: `Bearer ${token}`,
      },
    });
    const paymentMethods = await response.json();
    // console.log(address.data);
    return paymentMethods.data;
  } catch (error) {
    console.log("Error fetching paymentMethods.");
    console.log(error);
  }

}

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
	const token = await getCookie('auth-token');
	const currency = await getCookie('currency');



  // Fetch address data
  const addressData = await getAddress(locale, token);
  const paymentMethods = await getPaymentMethods(locale, token);


	// Extract the address ID from addressData
	const addressId = addressData[0]?.id; // Replace 'id' with the actual key in your address data

	if (!addressId) {
		console.log('Address ID not found.');
		return null; // Handle this error case as needed
	}

	// Fetch checkout data using the address ID
	const checkoutData = await getCheckoutInfo(locale, token, addressId);

	return (
		<CheckoutPage
			addressData={addressData}
			checkoutData={checkoutData}
			currency={currency}
			paymentMethods={paymentMethods}
		/>
	);
};

export default page;

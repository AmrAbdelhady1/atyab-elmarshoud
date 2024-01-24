import { getCookie } from '@/app/actions';
import { BASE_URL } from '@/constants/constants';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

interface Phone {
	id: number;
	country_key: string;
	number: string;
}

interface Currency {
	id: number;
	name: string;
	global_code: string;
	code: string;
	image: string;
	fees: number;
	currency_digits: number;
}

interface Country {
	id: number;
	name: string;
	iso: string;
	currency: Currency;
	phone_key: string;
	start_delivery_range: number;
	end_delivery_range: number;
}

interface Address {
	id: number;
	user_id: number;
	country_id: number;
	city_id: number;
	name: string;
	address_line_1: string;
	zip_code: string | null;
	notes: string | null;
	country_name: string;
	city: string;
	phone: Phone;
	country: Country;
}

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

interface cartItem {
	id: number;
	cart_id: number;
	product_id: number;
	price: number;
	currency_iso: string;
	quantity: number;
	product: Product;
}

interface CartInitialState {
	id: number;
	reference_id: string;
	sub_total: number;
	discount: number;
	total: number;
	user_id: number;
	quantity: number;
	address_id?: number;
	promo_code?: string;
	delivery_fee: number;
	items: cartItem[];
	address: Address | null;
	fees: number;
}

const initialState: CartInitialState = {
	id: 0,
	reference_id: '',
	sub_total: 0,
	discount: 0,
	total: 0,
	user_id: 0,
	quantity: 0,
	delivery_fee: 0,
	items: [],
	address: null,
	fees: 0,
};

export const fetchCartProducts = createAsyncThunk(
	'cart/fetchCartProducts',
	async () => {
		const token = await getCookie('auth-token');
		const iso = await getCookie('iso');
		// const token = '2447|uoc5PZKFu0rtO7DuF4T5dmV5rmFGCZ2Ox6CXjKUO';
		// console.log('token: ', token);
		try {
			const response = await fetch(`${BASE_URL}/get-cart-products`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					locale: 'en',
					'Country-Iso': iso,
				},
			});

			if (!response.ok) {
				// Handle API error here if needed
				const errorData = await response.json();
				throw new Error(errorData.message);
			}

			// If the request is successful, return the response (you can adjust as needed)
			const responseData = await response.json();
			// console.log('cart products data: ', responseData);
			return responseData;
		} catch (error) {
			// Handle errors and show a toast message
			// toast.error('Error fetching cart products');
			throw error;
		}
	}
);

export const addToCartAsync = createAsyncThunk(
	'cart/addToCartAsync',
	async ({ product_id, quantity }: { product_id: number; quantity: number }) => {
		const token = await getCookie('auth-token');
		// console.log('token: ', token);
		try {
			const response = await fetch(`${BASE_URL}/add-cart-product/${product_id}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`, // Replace with your authentication token
				},
				body: JSON.stringify({ quantity }),
			});

			if (!response.ok) {
				// Handle API error here if needed
				const errorData = await response.json();
				throw new Error(errorData.message);
			}

			// If the request is successful, return the response (you can adjust as needed)
			const responseData = await response.json();
			// console.log('responseData: ', responseData);
			return responseData;
		} catch (error) {
			// Handle errors and show a toast message
			toast.error('Error adding the product to the cart');
			throw error;
		}
	}
);

export const removeFromCartAsync = createAsyncThunk(
	'cart/removeFromCartAsync',
	async ({ product_id }: { product_id: number }) => {
		const token = await getCookie('auth-token');
		// console.log('token: ', token);
		try {
			const response = await fetch(
				`${BASE_URL}/delete-cart-product/${product_id}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`, // Replace with your authentication token
					},
				}
			);

			if (!response.ok) {
				// Handle API error here if needed
				const errorData = await response.json();
				throw new Error(errorData.message);
			}

			// If the request is successful, return the response (you can adjust as needed)
			const responseData = await response.json();
			// console.log('responseData: ', responseData);
			return responseData;
		} catch (error) {
			// Handle errors and show a toast message
			toast.error('Error removing the product from the cart');
			throw error;
		}
	}
);

const cartReducer = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		addToCart(state, action) {
			const itemIndex = state.items.findIndex(
				(item) => item.product_id === action.payload.productId
			);

			if (itemIndex >= 0) {
				state.items[itemIndex].quantity += 1;
				toast.success('Product Quantity Increased');
				// console.log('items: ', state.items);
			} else {
				const tempProduct = { ...action.payload, quantity: 1 };
				state.items.push(tempProduct);
				toast.success('Added Product To Cart');
			}

			// localStorage.setItem('items', JSON.stringify(state.items));
		},
		decreaseCart(state, action) {
			const itemIndex = state.items.findIndex(
				(cartItem) => cartItem.product_id === action.payload.productId
			);

			if (state.items[itemIndex].quantity > 1) {
				state.items[itemIndex].quantity -= 1;
				toast.error('Decreased Quantity From Cart');
			} else if (state.items[itemIndex].quantity === 1) {
				const nextCartItems = state.items.filter(
					(cartItem) => cartItem.product_id !== action.payload.productId
				);

				state.items = nextCartItems;

				toast.error('Removed Item From Cart');
			}
		},
		getTotal(state) {
			let { total, quantity } = state.items.reduce(
				(cartTotal, cartItem) => {
					const { price, quantity } = cartItem;
					const itemTotal = price * quantity;

					cartTotal.total += itemTotal;
					cartTotal.quantity += quantity;

					return cartTotal;
				},
				{
					total: 0,
					quantity: 0,
				}
			);
			state.total = total;
			state.quantity = quantity;
		},
		removeFromCart(state, action) {
			const nextCartItems = state.items.filter(
				(cartItem) => cartItem.product_id !== action.payload.productId
			);

			state.items = nextCartItems;
			toast.error('Removed Product From Cart');
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(addToCartAsync.fulfilled, (state, action) => {
				toast.success('Product added to the cart');
			})
			.addCase(addToCartAsync.rejected, (state, action) => {
				const error = action.error;

				toast.error('Error adding the product to the cart');
			})
			.addCase(removeFromCartAsync.fulfilled, (state, action) => {
				toast.success('Product removed from the cart');
			})
			.addCase(removeFromCartAsync.rejected, (state, action) => {
				const error = action.error;

				toast.error('Error removing the product from the cart');
			})
			.addCase(fetchCartProducts.fulfilled, (state, action) => {
				const cartData = action.payload.data;
				if (cartData === null) {
					state.id = 0;
					state.reference_id = '';
					state.sub_total = 0;
					state.discount = 0;
					state.total = 0;
					state.user_id = 0;
					state.quantity = 0;
					state.delivery_fee = 0;
					state.items = [];
					state.address = null;
					state.fees = 0;
				} else {
					state.id = cartData.id;
					state.reference_id = cartData.reference_id;
					state.sub_total = cartData.sub_total;
					state.discount = cartData.discount;
					state.total = cartData.total;
					state.user_id = cartData.user_id;
					state.quantity = cartData.quantity;
					state.delivery_fee = cartData.delivery_fee;
					state.items = cartData.items;
					state.address = cartData.address;
					state.fees = cartData.fees;
				}

				// toast.success('Cart products fetched successfully');
			})
			.addCase(fetchCartProducts.rejected, (state, action) => {
				const error = action.error;

				// toast.error('Error fetching cart products');
			});
	},
});

const { actions, reducer } = cartReducer;
export const { addToCart, getTotal, removeFromCart, decreaseCart } = actions;

export const CartReducer = reducer;
export default reducer;

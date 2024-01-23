import { getCookie } from '@/app/actions';
import axios from 'axios';

export const getData = async (params: any, url: string) => {
	const token = await getCookie('auth-token');

	const options = {
		method: 'GET',
		url: `https://atyab-staging.cryptdev.com/api/${url}`,
		params: { ...params },
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
	} finally {
	}
};

export const deleteData = async (url: string) => {
	const token = await getCookie('auth-token');

	const options = {
		method: 'DELETE',
		url: `https://atyab-staging.cryptdev.com/api/${url}`,
		// params: { ...params },
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
	} finally {
	}
};

export const addData = async (data: any, url: string) => {
	const token = await getCookie('auth-token');

	const options = {
		method: 'POST',
		url: `https://atyab-staging.cryptdev.com/api/${url}`,
		data: { ...data },
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		return null;
	} finally {
	}
};

export const updateData = async (data: any, url: string) => {
	const token = await getCookie('auth-token');

	const options = {
		method: 'PUT',
		url: `https://atyab-staging.cryptdev.com/api/${url}`,
		data: { ...data },
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		return null;
	} finally {
	}
};

'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import * as Yup from 'yup';

import { MuiTelInput } from 'mui-tel-input';
import DropDown from '@/app/[locale]/checkout/DropDown';
import { addData } from '@/axios/axiosClient';
import { addCookie } from '@/app/actions';

const RegisterForm = ({ countries }: any) => {
	const router = useRouter();
	const t = useTranslations();
	const [error, setError] = useState<string>('');

	const RegisterDataSchema = Yup.object().shape({
		first_name: Yup.string().required(t('First Name is required')),
		last_name: Yup.string().required(t('Last Name is required')),
		email: Yup.string()
			.email(t('Enter a valid email'))
			.required(t('Email is required')),
		number: Yup.string().required(t('Phone number is required')),
		country_id: Yup.string().required(t('Country is required')),
		password: Yup.string().required(t('Password is required')),
		password_confirmation: Yup.string()
			.oneOf([Yup.ref('password')], 'Passwords must match')
			.required(t('Password Confirmation is required')),
	});

	const formik = useFormik({
		initialValues: {
			first_name: '',
			last_name: '',
			email: '',
			number: '',
			country_id: '',
			password: '',
			password_confirmation: '',
		},
		validationSchema: RegisterDataSchema,
		onSubmit: () => handleSubmit(),
	});

	const handlePhoneNumber = (number: string) => {
		const trimmedPhoneNumber = number.split(' ');
		const countryCode = trimmedPhoneNumber[0];

		trimmedPhoneNumber.shift();
		const phoneNumber = trimmedPhoneNumber.join('');

		return { countryCode, phoneNumber };
	};

	const handleSubmit = async () => {
		const { countryCode, phoneNumber } = handlePhoneNumber(formik.values.number);

		const res = await addData(
			{ ...formik.values, number: phoneNumber, country_key: countryCode },
			'register'
		);

		if (res?.data) {
			await addCookie('auth-token', res.data.authorization);
			router.push('/');
		} else {
			setError(t('Email Adderss is already Registered'));
		}
	};

	return (
		<form
			onSubmit={formik.handleSubmit}
			className='w-[90%] max-w-[370px] text-[#232323]'>
			<h1 className='text-[24px] font-raleway mb-6'>{t('Register')}</h1>

			{formik.touched.first_name && formik.errors.first_name && (
				<p className='error-text'>{formik.errors.first_name}</p>
			)}
			<input
				type='text'
				name='first_name'
				id='first_name'
				placeholder={t('First Name')}
				value={formik.values.first_name}
				onChange={formik.handleChange}
				className='h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black mb-6'
			/>

			{formik.touched.last_name && formik.errors.last_name && (
				<p className='error-text'>{formik.errors.last_name}</p>
			)}
			<input
				type='text'
				name='last_name'
				id='last_name'
				placeholder={t('Last Name')}
				value={formik.values.last_name}
				onChange={formik.handleChange}
				className='h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black mb-6'
			/>

			{formik.touched.email && formik.errors.email && (
				<p className='error-text'>{formik.errors.email}</p>
			)}
			{error && <p className='error-text'>{error}</p>}
			<input
				type='text'
				name='email'
				id='email_reg'
				placeholder={t('Email Address')}
				value={formik.values.email}
				onChange={formik.handleChange}
				className='h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black mb-6'
			/>

			{formik.touched.number && formik.errors.number && (
				<p className='error-text'>{formik.errors.number}</p>
			)}
			<MuiTelInput
				defaultCountry='KW'
				dir='ltr'
				onChange={(newPhone) =>
					formik.setValues({ ...formik.values, number: newPhone })
				}
				name='phoneNumber'
				value={formik.values.number}
				className='h-[56px] w-full !mb-6 my-class-name'
			/>

			{formik.touched.country_id && formik.errors.country_id && (
				<p className='error-text'>{formik.errors.country_id}</p>
			)}
			<DropDown
				onChange={(id) => formik.setValues({ ...formik.values, country_id: id })}
				items={countries}
				holder='Country'
			/>

			<div className='my-6'>
				{formik.touched.password && formik.errors.password && (
					<p className='error-text'>{formik.errors.password}</p>
				)}
				<input
					type='password'
					name='password'
					id='password_reg'
					placeholder={t('Password')}
					value={formik.values.password}
					onChange={formik.handleChange}
					className='h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black'
				/>
			</div>

			{formik.touched.password_confirmation &&
				formik.errors.password_confirmation && (
					<p className='error-text'>{formik.errors.password_confirmation}</p>
				)}
			<input
				type='password'
				name='password_confirmation'
				id='password_confirmation'
				placeholder={t('Confirm Password')}
				value={formik.values.password_confirmation}
				onChange={formik.handleChange}
				className='h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black mb-6'
			/>

			<button type='submit' className='animate-button w-full h-[50px]'>
				{t('Register')}
			</button>
		</form>
	);
};

export default RegisterForm;

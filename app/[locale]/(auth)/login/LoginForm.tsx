'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useFormik } from 'formik';
import { useAppDispatch } from '@/redux/hooks/hooks';
import * as Yup from 'yup';

import { fetchCartProducts } from '@/redux/reducers/cartReducer';

import ForgetPassword from './ForgetPassword';

import {
	GmailIcon,
	FacebookIcon,
	AppleIcon,
} from '@/public/assets/svg/loginSvgs';
import { addData } from '@/axios/axiosClient';
import { addCookie } from '@/app/actions';

const LoginForm = () => {
	const router = useRouter();
	const t = useTranslations();
	const dispatch = useAppDispatch();

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const LoginDataSchema = Yup.object().shape({
		password: Yup.string().required(t('Password is required')),
		email: Yup.string()
			.email(t('Enter a valid email'))
			.required(t('Email is required')),
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: LoginDataSchema,
		onSubmit: () => handleSubmit(),
	});

	const handleForegetPassword = () => {
		setIsOpen(!isOpen);
	};

	const handleSubmit = async () => {
		const res = await addData(formik.values, 'login');

		if (res?.data) {
			await dispatch(fetchCartProducts());
			await addCookie('auth-token', res.data.authorization);
			router.push('/');
		} else {
			setError(t('Password or Email is wrong'));
		}
	};

	return (
		<form
			onSubmit={formik.handleSubmit}
			className='w-[90%] max-w-[370px] text-[#232323]'>
			<h1 className='text-[24px] font-raleway mb-6'>{t('Login')}</h1>
			{error && <p className='error-text text-center mb-6'>{error}</p>}
			<input
				type='text'
				id='email'
				name='email'
				value={formik.values.email}
				placeholder={t('Email Address')}
				onChange={formik.handleChange}
				className='h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black'
			/>
			{formik.touched.email && formik.errors.email && (
				<p className='error-text'>{formik.errors.email}</p>
			)}
			<input
				type='password'
				id='password'
				name='password'
				value={formik.values.password}
				placeholder={t('Password')}
				onChange={formik.handleChange}
				className='h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black mt-6'
			/>
			{formik.touched.password && formik.errors.password && (
				<p className='error-text'>{formik.errors.password}</p>
			)}
			<p
				className='text-primary font-medium underline hover:no-underline w-full flex items-center my-6 justify-end text-sm md:text-base cursor-pointer'
				onClick={handleForegetPassword}>
				{t('Forget Password?')}
			</p>

			<button type='submit' className='animate-button w-full h-[50px]'>
				{t('Login')}
			</button>

			<div className='flex items-center justify-between my-3 gap-2'>
				<span className='h-[1px] bg-black/20 w-full'></span>
				<span className='text-black/60 tracking-[-0.16px] whitespace-nowrap'>
					{t('Or')}
				</span>
				<span className='h-[1px] bg-black/20 w-full'></span>
			</div>

			<button
				type='button'
				style={{
					backgroundImage: 'linear-gradient(135deg, #EA4335 50%, transparent 51%)',
				}}
				className='w-full h-[50px] gap-4 animate-button !border-[#EA4335]'>
				{t('login with')}
				<p className='bg-white rounded-full p-[5px]'>
					<GmailIcon />
				</p>
			</button>
			<button
				type='button'
				style={{
					backgroundImage: 'linear-gradient(135deg, #1877F2 50%, transparent 51%)',
				}}
				className='w-full h-[50px] gap-4 animate-button !border-[#1877F2] my-4'>
				{t('login with')}
				<FacebookIcon />
			</button>
			<button type='button' className='w-full h-[50px] gap-4 animate-button'>
				{t('login with')}
				<p className='bg-black rounded-full'>
					<AppleIcon />
				</p>
			</button>

			<ForgetPassword isOpen={isOpen} onClose={handleForegetPassword} />
		</form>
	);
};

export default LoginForm;

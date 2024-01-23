'use client';

import { useTranslations } from 'next-intl';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';

import Image from 'next/image';
import { addData } from '@/axios/axiosClient';
import PageHeader from '@/components/PageHeader';

import './style.css';
import formImg from '@/public/assets/images/contacts/form.jpg';
import phoneImg from '@/public/assets/images/contacts/phone.png';
import emailImg from '@/public/assets/images/contacts/email.png';
import addressImg from '@/public/assets/images/contacts/address.png';
import { PreLoader } from '@/components';

const Contacts = () => {
	const t = useTranslations();

	const LoginDataSchema = Yup.object().shape({
		name: Yup.string().required(t('Name is required')),
		email: Yup.string()
			.email(t('Enter a valid email'))
			.required(t('Email is required')),
		phone: Yup.string().required(t('Phone Number is required')),
		message: Yup.string().required(t('Message is required')),
	});

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
		},
		validationSchema: LoginDataSchema,
		onSubmit: () => handleSubmit(),
	});

	const handleSubmit = async () => {
		const res = await addData(formik.values, 'contact-us');

		if (res) {
			toast.success(t('success'));
		}
	};

	return (
		<>
			<PreLoader />
			<PageHeader
				bgImgClassName='header-img'
				firstText='Organic Cosmetic'
				firstTextClassName='font-quentin'
				secondText='Contact Us'
			/>
			<section className='py-14 px-8 flex justify-between items-center flex-wrap'>
				<article className='m-5 flex flex-col items-center'>
					<Image src={addressImg} alt='Address' className='mb-3' />
					<p className='mb-3 font-semibold text-[24px]'>{t('Address')}</p>
					<p className='text-[#616161]'>58 White St., New York</p>
				</article>

				<article className='m-5 flex flex-col items-center'>
					<Image src={phoneImg} alt='Phone' className='mb-3' />
					<p className='mb-3 font-semibold text-[24px]'>{t('Phone')}</p>
					<p className='text-[#616161]'>+965 22097333</p>
				</article>

				<article className='m-5 flex flex-col items-center'>
					<Image src={emailImg} alt='Address' className='mb-3' />
					<p className='mb-3 font-semibold text-[24px]'>{t('Email')}</p>
					<p className='text-[#616161]'>hello@atyabalmarshoud.com</p>
				</article>
			</section>

			<section className='py-14 px-8 flex justify-between items-center flex-wrap'>
				<form onSubmit={formik.handleSubmit} className='flex-grow-[0.6]'>
					<h2 className='text-[26px] mb-5'>{t('SEND MESSAGE')}</h2>
					<p className='text-[16px] mb-5 text-[#616161]'>{t('contact-1')}</p>

					<div className='flex justify-between gap-5 flex-wrap lg:flex-nowrap'>
						<div className='w-full'>
							<input
								type='text'
								id='name_contact'
								name='name'
								value={formik.values.name}
								placeholder={t('Full name')}
								onChange={formik.handleChange}
								className='h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black'
							/>
							{formik.touched.name && formik.errors.name && (
								<p className='error-text'>{formik.errors.name}</p>
							)}
						</div>
						<div className='w-full'>
							<input
								type='text'
								id='email'
								name='email'
								value={formik.values.email}
								placeholder={t('Email')}
								onChange={formik.handleChange}
								className='h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black'
							/>
							{formik.touched.email && formik.errors.email && (
								<p className='error-text'>{formik.errors.email}</p>
							)}
						</div>
					</div>

					<div className='my-5'>
						<input
							type='text'
							id='phone'
							name='phone'
							value={formik.values.phone}
							placeholder={t('Phone Number')}
							onChange={formik.handleChange}
							className='h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black'
						/>
						{formik.touched.phone && formik.errors.phone && (
							<p className='error-text'>{formik.errors.phone}</p>
						)}
					</div>

					<textarea
						id='message'
						name='message'
						value={formik.values.message}
						placeholder={t('Message')}
						onChange={formik.handleChange}
						className='h-[171px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black resize-none'
					/>
					{formik.touched.message && formik.errors.message && (
						<p className='error-text'>{formik.errors.message}</p>
					)}

					<button
						type='submit'
						className='animate-button !h-[56px] !w-[160px] !bg-transparent mt-6'>
						{t('Send')}
					</button>
				</form>
				<Image src={formImg} alt='form' className='m-5' />
			</section>
		</>
	);
};

export default Contacts;

import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import { useTranslations } from 'next-intl';
import * as Yup from 'yup';

import { MuiTelInput } from 'mui-tel-input';
import { updateData } from '@/axios/axiosClient';
import DropDown from '../checkout/DropDown';

type Profile = {
	first_name: string;
	last_name: string;
	code: string;
	phone: {
		country_key: string;
		number: string;
	};
	country: {
		id: string;
		name: string;
	};
};

interface Props {
	isOpen: boolean;
	onClose: () => void;
	profile: Profile;
	countries: any;
}

const UpdateAccount = ({ isOpen, onClose, profile, countries }: Props) => {
	const t = useTranslations();
	const [error, setError] = useState<string>('');
	console.log('amr', profile);

	const RegisterDataSchema = Yup.object().shape({
		first_name: Yup.string().required(t('First Name is required')),
		last_name: Yup.string().required(t('Last Name is required')),
		number: Yup.string().required(t('Phone number is required')),
		country_id: Yup.string().required(t('Country is required')),
	});

	const formik = useFormik({
		initialValues: {
			first_name: profile.first_name,
			last_name: profile.last_name,
			number: '',
			country_id: profile.country.id,
		},
		enableReinitialize: true,
		validationSchema: RegisterDataSchema,
		onSubmit: () => handleSubmit(),
	});

	const handleClose = () => {
		onClose();
		formik.resetForm();
		setError('');
	};

	const handlePhoneNumber = (number: string) => {
		const trimmedPhoneNumber = number.split(' ');
		const countryCode = trimmedPhoneNumber[0];

		trimmedPhoneNumber.shift();
		const phoneNumber = trimmedPhoneNumber.join('');

		return { countryCode, phoneNumber };
	};

	const handleSubmit = async () => {
		const { countryCode, phoneNumber } = handlePhoneNumber(formik.values.number);

		const res = await updateData(
			{ ...formik.values, number: phoneNumber, country_key: countryCode },
			'update-profile'
		);

		if (res) {
			toast.success(t('Account successfully updated'));
			handleClose();
		} else {
			setError(t('Phone number is unvalid'));
		}
	};

	return (
		<div
			className={`w-full min-h-screen bg-black/50 fixed left-0 overflow-hidden z-50 top-[-100%] flex items-center justify-center
    ${isOpen && '!top-0'}
    `}>
			<form
				onSubmit={formik.handleSubmit}
				className={`text-start m-auto w-full h-fit max-w-[500px] text-[#232323] bg-white p-5 rounded-md shadow-2xl
        top-[-100%] fixed duration-500 ease-in-out ${isOpen && '!top-[30%]'}
      `}>
				<h1 className='text-[24px] font-raleway mb-6'>{t('Edit Password')}</h1>
				{error && <p className='error-text text-center mb-6'>{error}</p>}
				<div className='mb-6'>
					<input
						type='text'
						name='first_name'
						id='first_name'
						placeholder={t('First Name')}
						value={formik.values.first_name}
						onChange={formik.handleChange}
						className='h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black'
					/>
					{formik.touched.first_name && formik.errors.first_name && (
						<p className='error-text'>{formik.errors.first_name}</p>
					)}
				</div>
				<div className='mb-6'>
					<input
						type='text'
						name='last_name'
						id='last_name'
						placeholder={t('Last Name')}
						value={formik.values.last_name}
						onChange={formik.handleChange}
						className='h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black'
					/>
					{formik.touched.last_name && formik.errors.last_name && (
						<p className='error-text'>{formik.errors.last_name}</p>
					)}
				</div>

				<div className='mb-6'>
					<MuiTelInput
						defaultCountry='KW'
						dir='ltr'
						onChange={(newPhone) =>
							formik.setValues({ ...formik.values, number: newPhone })
						}
						name='phoneNumber'
						value={formik.values.number}
						className='h-[56px] w-full my-class-name'
					/>
					{formik.touched.number && formik.errors.number && (
						<p className='error-text'>{formik.errors.number}</p>
					)}
				</div>

				<div className='mb-6'>
					<DropDown
						onChange={(id) => formik.setValues({ ...formik.values, country_id: id })}
						items={countries}
						holder='Country'
					/>
				</div>

				<div className='flex items-center gap-6'>
					<button
						type='button'
						className='animate-button w-full h-[50px]'
						onClick={handleClose}>
						{t('Close')}
					</button>
					<button type='submit' className='animate-button w-full h-[50px]'>
						{t('Update')}
					</button>
				</div>
			</form>
		</div>
	);
};

export default UpdateAccount;

import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import { useTranslations } from 'next-intl';
import * as Yup from 'yup';

import { BASE_URL } from '@/constants/constants';
import { addData, updateData } from '@/axios/axiosClient';
import DropDown from '../checkout/DropDown';
import { MuiTelInput } from 'mui-tel-input';
import { useRouter } from 'next/navigation';

interface Props {
	isOpen: boolean;
	onClose: () => void;
	countries: any;
	isEdit: boolean;
}

const UpdateAddress = ({ isOpen, onClose, countries, isEdit }: Props) => {
	const t = useTranslations();
	const router = useRouter();

	const [cities, setCities] = useState([]);

	const AddressFormSchema = Yup.object().shape({
		country_id: Yup.string().required('Country is required'),
		city_id: Yup.string().required('City is required'),
		name: Yup.string().required('Address Name is required'),
		number: Yup.string().required('Phone number is required'),
		address_line_1: Yup.string().required('Address Line 1 is required'),
		zip_code: Yup.string().required('Zip Code is required'),
		notes: Yup.string(),
	});

	const initialValues = {
		country_id: '',
		city_id: '',
		name: '',
		number: '',
		address_line_1: '',
		zip_code: '',
		notes: '',
	};

	const formik = useFormik({
		initialValues,
		validationSchema: AddressFormSchema,
		onSubmit: () => handleSubmit(),
	});

	const handlePhoneNumber = (number: string) => {
		const trimmedPhoneNumber = number.split(' ');
		const countryCode = trimmedPhoneNumber[0];

		trimmedPhoneNumber.shift();
		const phoneNumber = trimmedPhoneNumber.join('');

		return { countryCode, phoneNumber };
	};

	const handleClose = () => {
		onClose();
		formik.resetForm();
	};

	const handleSubmit = async () => {
		if (!isEdit) {
			const { countryCode, phoneNumber } = handlePhoneNumber(formik.values.number);
			console.log('submiting');
			console.log('values: ', {
				...formik.values,
				number: phoneNumber,
				country_key: countryCode,
			});
			const res = await addData(
				{ ...formik.values, number: phoneNumber, country_key: countryCode },
				'address'
			);

			if (res) {
				toast.success('Address successfully added');
				handleClose();
				router.refresh();
			} else {
				toast.error('Could not add address, Try again later');
			}
		} else {
			const { countryCode, phoneNumber } = handlePhoneNumber(formik.values.number);
			console.log('submiting');
			console.log('values: ', {
				...formik.values,
				number: phoneNumber,
				country_key: countryCode,
			});
			const res = await updateData(
				{ ...formik.values, number: phoneNumber, country_key: countryCode },
				'update-address'
			);

			if (res) {
				toast.success('Address successfully updated');
				handleClose();
				router.refresh();
			} else {
				toast.error('Could not update address, Try again later');
			}
		}
	};

	const fetchCities = async (countryId: any) => {
		try {
			const response = await fetch(`${BASE_URL}/country/${countryId}/cities`);
			const data = await response.json();

			if (data && data.data && data.data.cities) {
				setCities(data.data.cities);
				console.log('cities: ', cities);
			} else {
				setCities([]); // Clear cities if no data is available
			}
		} catch (error) {
			console.error('Error fetching cities:', error);
			setCities([]); // Clear cities in case of an error
		}
	};

	useEffect(() => {
		if (formik.values.country_id) {
			fetchCities(formik.values.country_id);
		}
	}, [formik.values.country_id]);

	return (
		<div
			className={`w-full min-h-screen bg-black/50 fixed left-0 overflow-hidden z-50 top-[-100%] flex items-center justify-center
    ${isOpen && '!top-0'}
    `}>
			<form
				onSubmit={formik.handleSubmit}
				className={`text-start m-auto w-full h-[500px] max-w-[500px] text-[#232323] bg-white p-5 rounded-md shadow-2xl overflow-y-auto hide-scrollbar
        top-[-100%] fixed duration-500 ease-in-out ${isOpen && '!top-[20%]'}
      `}>
				<h1 className='text-[24px] font-raleway mb-6'>
					{isEdit ? 'Edit ' : 'Add '} Address
				</h1>
				{/* {error && <p className='error-text text-center mb-6'>{error}</p>} */}

				<div className='mb-6'>
					<DropDown
						onChange={(id) => {
							formik.setValues({ ...formik.values, country_id: id });
						}}
						items={countries}
						holder='Country'
					/>
					{formik.touched.country_id && formik.errors.country_id && (
						<p className='error-text'>{formik.errors.country_id}</p>
					)}
				</div>
				<div className='mb-6'>
					<DropDown
						onChange={(id) => {
							formik.setValues({ ...formik.values, city_id: id });
						}}
						items={cities}
						holder='City'
					/>
					{formik.touched.city_id && formik.errors.city_id && (
						<p className='error-text'>{formik.errors.city_id}</p>
					)}
				</div>
				<div className='mb-6'>
					<input
						type='text'
						name='name'
						id='name'
						value={formik.values.name}
						onChange={formik.handleChange}
						placeholder={'Address name'}
						className='h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black'
					/>
					{formik.touched.name && formik.errors.name && (
						<p className='error-text'>{formik.errors.name}</p>
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
						className='h-[56px] w-full  my-class-name'
					/>
					{formik.touched.number && formik.errors.number && (
						<p className='error-text'>{formik.errors.number}</p>
					)}
				</div>
				<div className='mb-6'>
					<input
						type='text'
						name='address_line_1'
						id='address_line_1'
						value={formik.values.address_line_1}
						onChange={formik.handleChange}
						placeholder={'Address Line 1'}
						className='h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black'
					/>
					{formik.touched.address_line_1 && formik.errors.address_line_1 && (
						<p className='error-text'>{formik.errors.address_line_1}</p>
					)}
				</div>
				<div className='mb-6'>
					<input
						type='text'
						name='zip_code'
						id='zip_code'
						value={formik.values.zip_code}
						onChange={formik.handleChange}
						placeholder={'Zip Code'}
						className='h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black'
					/>
					{formik.touched.zip_code && formik.errors.zip_code && (
						<p className='error-text'>{formik.errors.zip_code}</p>
					)}
				</div>
				<div className='mb-6'>
					<textarea
						name='notes'
						id='notes'
						rows={5}
						value={formik.values.notes}
						onChange={formik.handleChange}
						placeholder={'Notes'}
						className=' w-full border border-[#e0e0e0] py-[14px] px-[17px] resize-none focus:outline-none focus:border-black'
					/>
					{formik.touched.notes && formik.errors.notes && (
						<p className='error-text'>{formik.errors.notes}</p>
					)}
				</div>
				<div className='flex items-center gap-6'>
					<button
						type='button'
						className='animate-button w-full h-[50px]'
						onClick={handleClose}>
						Close
					</button>
					<button type='submit' className='animate-button w-full h-[50px]'>
						{isEdit ? 'Update' : 'Add'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default UpdateAddress;

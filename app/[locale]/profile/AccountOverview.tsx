'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import UpdatePassword from './UpdatePassword';
import UpdateAccount from './UpdateAccount';
import UpdateAddress from './UpdateAddress';

import { FaPencil } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import { deleteData } from '@/axios/axiosClient';
import toast from 'react-hot-toast';

const AccountOverview = ({ profile, countries, addressData }: any) => {
	const t = useTranslations();
	const router = useRouter();
	const [openPassword, setOpenPassword] = useState<boolean>(false);
	const [openAccount, setOpenAccount] = useState<boolean>(false);
	const [openAddress, setOpenAddress] = useState<boolean>(false);

	// console.log(addressData);

	const updatePasswordHandler = () => {
		setOpenPassword(!openPassword);
	};

	const updateAccountHandler = () => {
		setOpenAccount(!openAccount);
	};

	const updateAddressHandler = () => {
		setOpenAddress(!openAddress);
	};

	const handleDeleteAddress = async () => {
		const res = await deleteData(`address/${addressData[0].id}`);

		if (res) {
			toast.success('Address deleted successfully');
			router.refresh();
		} else {
			toast.error('Couldn not delete address, Try again later');
		}
	};

	return (
		<div className='w-full bg-slate-50 rounded-md flex flex-col gap-3 p-3'>
			<p className='font-raleway font-semibold text-lg'>{t('Account Overview')}</p>
			<hr />
			<div className='flex gap-8 max-md:flex-col'>
				<div className='flex-[0.5] flex flex-col'>
					<div className='flex items-center justify-between border border-slate-300 rounded-t-md py-5 px-3'>
						<p className='font-nunito font-normal text-base'>
							{t('Account Details')}
						</p>
						<div
							className='cursor-pointer hover:scale-110 transition-all ease-in-out'
							onClick={updatePasswordHandler}>
							<FaPencil />
						</div>
					</div>
					<div className='flex items-center justify-between border border-t-0 border-slate-300 rounded-b-md py-5 px-3'>
						<div className='flex flex-col gap-0.5'>
							<p className='font-nunito font-semibold text-base'>
								{profile?.first_name} {profile?.last_name}
							</p>
							<p className='font-nunito font-normal text-base'>{profile?.email}</p>
						</div>
						<div
							className='cursor-pointer hover:scale-110 transition-all ease-in-out'
							onClick={updateAccountHandler}>
							<FaPencil />
						</div>
					</div>
				</div>
				<div className='flex-[0.5] flex flex-col'>
					<div className='flex flex-col border border-slate-300 rounded-t-md py-2.5 px-3'>
						<p className='font-nunito font-semibold text-base'>
							{t('Shipping Addresses')}
						</p>
						<div className='flex items-center justify-between'>
							<p className='font-nunito font-normal text-sm'>
								{/* {t('You Have 1 Saved Addresses')} */}
								{'You Have '} {addressData.length} {'Saved Addresses'}
							</p>
							{addressData.length === 0 && (
								<div
									className='cursor-pointer hover:scale-110 transition-all ease-in-out'
									onClick={updateAddressHandler}>
									<MdAdd size={25} />
								</div>
							)}
						</div>
					</div>
					{addressData.length !== 0 && (
						<div className='flex items-center justify-between border border-t-0 border-slate-300 rounded-b-md py-5 px-3'>
							<div className='flex flex-col gap-0.5'>
								<p className='font-nunito font-semibold text-base'>
									{addressData[0].name}
								</p>
								<p className='font-nunito font-normal text-sm'>
									{addressData[0].address_line_1}
								</p>
							</div>
							<div className='flex gap-5'>
								<div
									className='cursor-pointer hover:scale-110 transition-all ease-in-out'
									onClick={updateAddressHandler}>
									<FaPencil />
								</div>
								<div
									className='cursor-pointer hover:scale-110 transition-all ease-in-out'
									onClick={handleDeleteAddress}>
									<FaTrash />
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			<UpdatePassword isOpen={openPassword} onClose={updatePasswordHandler} />
			<UpdateAccount
				isOpen={openAccount}
				onClose={updateAccountHandler}
				profile={profile}
				countries={countries}
			/>
			<UpdateAddress
				isOpen={openAddress}
				onClose={updateAddressHandler}
				countries={countries}
				isEdit={addressData.length === 0 ? false : true}
			/>
		</div>
	);
};

export default AccountOverview;

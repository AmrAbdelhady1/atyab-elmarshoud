'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import { PreLoader } from '@/components';
import PageHeader from '@/components/PageHeader';
import MyOrders from './MyOrders';
import AccountOverview from './AccountOverview';

import { IoPersonOutline, IoStorefront } from 'react-icons/io5';
import './style.css';

const tabs = ['account', 'orders'];

const Profile = ({ orders, profile, countries, addressData }: any) => {
	const t = useTranslations();
	const [activeTab, setActiveTab] = useState<string>(tabs[0]);

	return (
		<>
			<PreLoader />
			<PageHeader
				bgImgClassName='header-img'
				firstText='Organic Perfumes'
				firstTextClassName='font-quentin'
				secondText='Profile'
			/>

			<div className='my-[150px] mx-[119.5px] flex gap-10 max-lg:mx-10 max-md:flex-col'>
				<div className='flex-[0.3] flex flex-col gap-0.5 font-raleway font-semibold md:max-w-[300px]'>
					<div
						className={`flex items-center gap-5 py-5 px-3 cursor-pointer rounded-t-md ${
							activeTab === tabs[0] ? 'bg-black text-white' : 'bg-slate-50'
						}`}
						onClick={() => setActiveTab(tabs[0])}>
						<IoPersonOutline size={30} />
						<p>{t('My Account')}</p>
					</div>
					<div
						className={`flex items-center gap-5 py-5 px-3 cursor-pointer rounded-b-md ${
							activeTab === tabs[1] ? 'bg-black text-white' : 'bg-slate-50'
						}`}
						onClick={() => setActiveTab(tabs[1])}>
						<IoStorefront size={30} />
						<p>{t('My Orders')}</p>
					</div>
				</div>
				<div className='flex-[0.7]'>
					{activeTab === tabs[0] && (
						<AccountOverview
							profile={profile}
							countries={countries}
							addressData={addressData}
						/>
					)}
					{activeTab === tabs[1] && <MyOrders orders={orders} />}
				</div>
			</div>
		</>
	);
};

export default Profile;

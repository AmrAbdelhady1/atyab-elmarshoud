'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import PageHeader from '@/components/PageHeader';
import { PreLoader } from '@/components';

import { FaCheckCircle } from 'react-icons/fa';

import image from '@/public/assets/images/delivery/team-image-1.jpg';

import './style.css';

const Delivery = () => {
	const t = useTranslations();
	const deliverBest = [
		'Frilled shark ground shark livebearer cutthroat trout',
		'Tonguefish devil ray smalleye squaretail dogfish',
		'Porcupinefish warty angler zebra turkeyfish',
	];

	const chooseLocation = [
		{
			title: 'Choose Your Location',
			description:
				'Tidewater goby sheepshead sand tilefish longnose dace, mooneye; kanyu pike pirat',
		},
		{
			title: 'Make Your Order',
			description:
				'Tidewater goby sheepshead sand tilefish longnose dace, mooneye; kanyu pike pirat',
		},
		{
			title: 'Order is on the Way',
			description:
				'Tidewater goby sheepshead sand tilefish longnose dace, mooneye; kanyu pike pirat',
		},
	];

	return (
		<>
			<PreLoader />
			<PageHeader
				bgImgClassName='header-img'
				firstText='Organic Cosmetic'
				firstTextClassName='font-quentin'
				secondText='Delivery'
			/>
			<section className='py-14 px-8 flex justify-center items-center'>
				<img src={image.src} className='me-3 self-center imageWrapper' />
				<article>
					<h1 className='mb-3 text-4xl'>{t('WE DELIVER THE BEST POSSIBLE WAY')}</h1>
					<p className='mb-3'>
						{t(
							'Palfmoon yellow moray tompot blenny, cuchia tompot blenny; smelt southern flounder grunt sculpin yellowbanded perch'
						)}
					</p>

					<div className='mt-6 mb-5 '>
						{deliverBest.map((text) => (
							<article key={text} className='flex items-center mb-3'>
								<FaCheckCircle color={'#eaaa85'} />
								<p className='ms-2'>{t(text)}</p>
							</article>
						))}
					</div>

					<button className='animate-button'>{t('VIEW MORE')}</button>
				</article>
			</section>

			<section className='py-14 px-8 flex justify-center items-center'>
				<article className='flex-1'>
					<h1 className='mb-4 text-[26px]'>{t('HOW WE WORK')}</h1>
					<p>
						{t(
							'Palfmoon yellow moray tompot blenny, cuchia tompot spiny dwarf catfish eelpout yellow weaver mudskipper black bass'
						)}
					</p>
				</article>

				<article className='m-8 sm:w-1/2 md:w-1/2 lg:w-1/2 flex-1 flex justify-center items-center'>
					<h1 className='text-left text-4xl font-quentin font-bold text-[140px]'>
						{t('steps')}
					</h1>
				</article>
			</section>

			<section className='py-14 px-8 flex flex-wrap  justify-between'>
				{chooseLocation.map((el, index) => {
					return (
						<article
							className={`flex m-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}
							key={index}>
							<div>
								<p className='font-semibold font-quentin text-[#f8eae0] text-[100px] mt-[-50px] me-2'>
									{index + 1}
								</p>
							</div>
							<div>
								<h6 className='font-semibold mb-5'>{t(el.title)}</h6>
								<p>{t(el.description)}</p>
							</div>
						</article>
					);
				})}
			</section>

			<section className='py-14 px-8'>
				<h1 className='text-center mb-4 text-[38px] font-extralight'>
					{t('PRICING PACKAGES')}
				</h1>
				<p className='text-center mb-2 text-[#A0A2A0]'>
					{t('Black scabbardfish vimba, beaked salmon sandroller, firefish silver')}
					<br />
					{t('driftfish, golden dojo finback cat shark central uhylise')}
				</p>
			</section>

			<section className='py-14 px-8 premium-deluxe mx-auto flex justify-center items-center flex-wrap'>
				<article className='premium px-7 py-10 flex flex-wrap mx-4 my-4'>
					<div>
						<h1 className='font-semibold mb-3'>{t('Premium Edition')}</h1>
						<p>
							{t('Natural Pure Products Organic Free Nutrition Book Mineral Goods')}
						</p>
						<p>{t('Maca Organic Pigments')}</p>
						<button className='animate-button !bg-transparent mt-4'>
							{t('VIEW MORE')}
						</button>
					</div>
					<span className='font-quentin text-[150px]'>75$</span>
				</article>

				<article className='deluxe px-7 py-10 flex flex-wrap mx-4 my-4'>
					<div>
						<h1 className='font-semibold mb-3'>{t('Premium Edition')}</h1>
						<p>
							{t('Natural Pure Products Organic Free Nutrition Book Mineral Goods')}
						</p>
						<p>{t('Macc Organic Pigments')}</p>
						<button className='animate-button mt-4'>{t('VIEW MORE')}</button>
					</div>
					<span className='font-quentin text-[150px]'>75$</span>
				</article>
			</section>

			<section className='py-14 px-8 flex justify-center items-center'>
				<article className='flex-1 mx-6'>
					<h1 className='mb-4'>
						{t('QUALITY SERVICE WILL HELP YOU WITH EVERYTHING')}
					</h1>
					<p>{t('delivery-1')}</p>

					<div className='mt-8 flex justify-around'>
						<div className='text-center'>
							<p className='text-[#eaaa85] text-[40px] font-extralight'>
								{t('120 k')}
							</p>
							<p>
								{t('Permanent')} <br /> {t('Clients')}
							</p>
						</div>

						<div className='text-center'>
							<p className='text-[#eaaa85] text-[40px] font-extralight'>
								{t('240 k')}
							</p>
							<p>{t('Sold per Year')}</p>
						</div>
					</div>

					<button className='animate-button'>{t('VIEW MORE')}</button>
				</article>

				<img src='https://8ded8880.rocketcdn.me/themes/cosmecos-new/wp-content/uploads/2020/12/delivery-image-2-2.png' />
			</section>

			<section className='page-footer py-14 px-8 flex justify-between items-center'>
				<article>
					<h1 className='text-[48px] mb-4 font-light'>
						{t('Find Your Beauty Guide')}
					</h1>
					<p className='font-nunito text-[#616161] text-[20px]'>{t('delivery-2')}</p>
				</article>

				<button className='animate-button !bg-transparent'>{t('VIEW MORE')}</button>
			</section>
		</>
	);
};

export default Delivery;

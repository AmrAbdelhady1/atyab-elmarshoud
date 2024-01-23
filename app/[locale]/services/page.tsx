'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import PartnersContainer from '@/components/PartnersContainer';
import { PreLoader } from '@/components';
import Service from './Service';

import headerImage from '@/public/assets/images/services/servicesHeader.png';
import sidesplash2Image from '@/public/assets/images/services/sidesplash2.png';
import sidesplash3Image from '@/public/assets/images/services/sidesplash3.jpg';
import forBodyImage from '@/public/assets/images/services/body.jpg';
import cosmeticsImage from '@/public/assets/images/services/cosmetics.jpg';
import nailpolishImage from '@/public/assets/images/services/nailpolish.jpg';
import ourServicesImage from '@/public/assets/images/services/ourservices.jpg';
import reviewsImage from '@/public/assets/images/services/reviews.jpg';

import {
	FreshTypesSvg,
	FloralTypesSvg,
	OceanicTypesSvg,
	WoodyTypesSvg,
} from '@/public/assets/svg/FragranceTypesSvgs';

const page = () => {
	const [activeTab, setActiveTab] = useState('About Us');

	const paragraphs = {
		'About Us':
			'Mosshead warbonnet queen triggerfish black bass scissor-tail rasbora--great white shark driftfish carpetshark swamp-eel rice eelMosshead warbonnet queen triggerfish black bass scissor-tail rasbora--great white shark driftfish carpetshark swamp-eel rice eelMosshead warbonnet queen triggerfish. Pricklefish parasitic catfish torrent fish sailfish',
		Services:
			'Warbonnet queen triggerfish black bass scissor-tail rasbora--great white shark driftfish carpetshark swamp-eel rice eelMosshead warbonnet queen triggerfish black bass scissor-tail rasbora--great white shark driftfish carpetshark swamp-eel rice eelMosshead warbonnet queen triggerfish. Pricklefish parasitic catfish torrent fish sailfish mosshead',
		History:
			'Queen triggerfish black bass scissor-tail rasbora--great white shark driftfish carpetshark swamp-eel rice eelMosshead warbonnet queen triggerfish black bass scissor-tail rasbora--great white shark driftfish carpetshark swamp-eel rice eelMosshead warbonnet queen triggerfish. Pricklefish parasitic catfish torrent fish sailfish mosshead warbonnet',
	};

	const handleTabClick = (tabName: string) => {
		setActiveTab(tabName);
	};

	const renderParagraph = () => {
		return (
			<p className='leading-loose text-left text-[0.9rem] text-gray-500 tracking-wide max-w-prose max-lg:ml-5'>
				{paragraphs[activeTab as keyof typeof paragraphs]}
			</p>
		);
	};

	return (
		<>
			<PreLoader />
			<div className='mb-10'>
				<Image alt='header image' src={headerImage} className='w-full' />

				{/* Fragrance Types */}
				<div className='flex flex-col justify-center gap-10 mt-40 max-lg:mt-20'>
					{/* Text and Image */}
					<div className='flex flex-col items-center justify-center gap-2 relative'>
						<div className='absolute right-0 top-1'>
							<Image
								alt='side splash 2'
								src={sidesplash2Image}
								className='max-lg:hidden'
							/>
						</div>
						<p className='text-center text-[2.5rem] font-extralight tracking-tight max-lg:text-2xl'>
							FRAGRANCE TYPES
						</p>
						<p className='max-w-prose text-center text-base text-gray-400 mt-5 tracking-wide max-lg:text-lg'>
							Huck billed barracudina sandroller eeltail catfish mosshead warbonnet
							crestfish barfish remora bonytongue uhylise monkey face prickleback.
						</p>
					</div>
					{/* Types */}
					<div className='max-w-prose flex items-center justify-around gap-3 mt-16 mx-auto max-lg:flex-col'>
						<div className='flex flex-col gap-5 items-center justify-center w-64'>
							<FreshTypesSvg />
							<p className='text-xl font-normal'>Fresh Types</p>
							<p className='leading-loose text-center text-[0.9rem] text-gray-500 tracking-wide'>
								Black scalyfin kingfish convict blenny ziege yellow moray whalefish
								silver drifitinity elpo
							</p>
						</div>
						<div className='flex flex-col gap-5 items-center justify-center w-64'>
							<FloralTypesSvg />
							<p className='text-xl font-normal'>Floral Types</p>
							<p className='leading-loose text-center text-[0.9rem] text-gray-500 tracking-wide'>
								Atlantic eel cutthroat eel atka mackerel freshwater eel rock bass
								rocketly gylty
							</p>
						</div>
						<div className='flex flex-col gap-5 items-center justify-center w-64'>
							<OceanicTypesSvg />
							<p className='text-xl font-normal'>Oceanic Types</p>
							<p className='leading-loose text-center text-[0.9rem] text-gray-500 tracking-wide'>
								California halibut gianttail dogfish plunderfish dorado rock beauty
								combtooth blenny
							</p>
						</div>
						<div className='flex flex-col gap-5 items-center justify-center w-64'>
							<WoodyTypesSvg />
							<p className='text-xl font-normal'>Woody Types</p>
							<p className='leading-loose text-center text-[0.9rem] text-gray-500 tracking-wide'>
								Redmouth whalefish ling cod koi spotted dogfish lemon sole nurse
								sandfish slender catfish.
							</p>
						</div>
					</div>
				</div>

				{/* Services Overview */}
				<div className='flex flex-col gap-5'>
					{/* Text */}
					<div className='flex flex-col items-center justify-center gap-2 relative mt-44'>
						<p className='text-center text-[2.5rem] font-extralight tracking-tight max-lg:text-2xl'>
							HIGH QUALITY SERVICES
						</p>
						<p className='max-w-prose text-center text-base leading-8 text-gray-400 mt-5 tracking-wide'>
							The stylish and organized interior represents the way to feel happy and
							complete. Design and comfort are primarily important for the success of a
							person’s life.
						</p>
					</div>
					{/* Services Types */}
					<div className='flex flex-wrap items-center justify-center gap-12 mx-6 mt-20 max-lg:flex-col'>
						<Service img={forBodyImage} title='Best' desc='For Body' />
						<Service img={cosmeticsImage} title='Multi' desc='Cosmetics' />
						<Service img={nailpolishImage} title='Color' desc='Nail Polish' />
					</div>
				</div>

				{/* Our Services */}
				<p className='mt-48 mx-48 mb-16 text-left text-[3rem] font-extralight tracking-tight max-lg:text-3xl max-lg:mx-0 max-lg:mt-10 max-lg:ml-5'>
					OUR SERVICES
				</p>
				<div className='relative'>
					<div className='absolute left-0 bottom-16'>
						<Image
							alt='side splash 3'
							src={sidesplash3Image}
							className='max-lg:hidden'
						/>
					</div>
					<div className='mx-48 px-8 flex flex-wrap gap-28 max-lg:flex-col max-lg:items-center justify-center max-lg:mx-0'>
						<div className='relative mt-8'>
							<Image
								alt='out services'
								src={ourServicesImage}
								className='object-fill'
							/>
							<div className='border border-black absolute inset-0 bottom-[5%] right-[5%] left-[-5%] top-[-5%]'></div>
						</div>
						<div className='flex-1 flex flex-col gap-10'>
							<div className='flex gap-8 items-start justify-start max-lg:flex-col max-lg:items-center max-lg:justify-center'>
								<p
									onClick={() => handleTabClick('About Us')}
									className={`text-2xl leading-7 font-light tracking-wide cursor-pointer max-lg:text-lg ${
										activeTab === 'About Us' ? 'border-b-2 border-black pb-3' : ''
									}`}>
									About Us
								</p>
								<p
									onClick={() => handleTabClick('Services')}
									className={`text-2xl leading-7 font-light tracking-wide cursor-pointer max-lg:text-lg ${
										activeTab === 'Services' ? 'border-b-2 border-black pb-3' : ''
									}`}>
									Services
								</p>
								<p
									onClick={() => handleTabClick('History')}
									className={`text-2xl leading-7 font-light tracking-wide cursor-pointer max-lg:text-lg ${
										activeTab === 'History' ? 'border-b-2 border-black pb-3' : ''
									}`}>
									History
								</p>
							</div>
							{renderParagraph()}
							<button className='animate-button !max-w-[150px]'>VIEW MORE</button>
						</div>
					</div>
				</div>

				{/* Reviews */}
				<div className='w-full mt-44 relative'>
					<Image
						alt='bg image'
						src={reviewsImage}
						className='min-h-[920px] object-cover max-lg:h-[740px]'
					/>
					<div className='absolute flex items-center justify-center inset-0'>
						<div className='bg-white max-w-[952px] min-h-[579px] p-6 max-lg:w-full max-lg:h-[600px] flex'>
							<div className='flex flex-col items-start justify-start border border-black px-20 py-20 max-lg:py-7 max-lg:px-5'>
								<p className='text-[#eaaa85] text-3xl leading-5 font-extralight mb-2 max-lg:text-2xl'>
									Testemonials
								</p>
								<p className='text-left text-[2.3rem] font-extralight tracking-tight mb-2 max-lg:text-3xl'>
									WHAT OUR CLIENTS SAY
								</p>
								<p className='text-xl leading-[2em] font-light text-slate-500 max-lg:text-lg'>
									"Brows should begin directly above the middle of your nostrils. The
									highest point of the arch should connect the tip of the nose with the
									middle of the iris. Brows should end where the corner of the nostril
									connects with the outer corner of the eye."
								</p>
								<p className='mt-10 text-xl leading-[1.8em]'>Samantha Peterson</p>
								<p className='mt-1 text-[#eaaa85] text-sm font-bold'>
									Client of Sosmecos
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Partners */}
				<PartnersContainer />
			</div>
		</>
	);
};

export default page;

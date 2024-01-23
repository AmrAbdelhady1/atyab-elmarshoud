'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import galleryPicture1 from '../../public/assets/images/home/revolution-gallery/pic1.jpg';
import galleryPicture2 from '../../public/assets/images/home/revolution-gallery/pic2.jpg';
import galleryPicture3 from '../../public/assets/images/home/revolution-gallery/pic3.jpg';
import galleryPicture4 from '../../public/assets/images/home/revolution-gallery/pic4.jpg';
import galleryPicture1Big from '../../public/assets/images/home/revolution-gallery/pic1Big.jpg';
import galleryPicture2Big from '../../public/assets/images/home/revolution-gallery/pic2Big.jpg';
import galleryPicture3Big from '../../public/assets/images/home/revolution-gallery/pic3Big.jpg';
import galleryPicture4Big from '../../public/assets/images/home/revolution-gallery/pic4Big.jpg';

import { FiPlus } from 'react-icons/fi';

const RevolutionGallery = () => {
	const t = useTranslations();
	const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
		null
	);
	const [isFullScreen, setIsFullScreen] = useState(false);

	const openFullScreen = (image: StaticImageData) => {
		setSelectedImage(image);
		setIsFullScreen(true);
	};

	const closeFullScreen = () => {
		setSelectedImage(null);
		setIsFullScreen(false);
	};

	const renderImages = () => {
		const images = [
			{ small: galleryPicture1, big: galleryPicture1Big },
			{ small: galleryPicture2, big: galleryPicture2Big },
			{ small: galleryPicture3, big: galleryPicture3Big },
			{ small: galleryPicture4, big: galleryPicture4Big },
		];

		return images.map((image, index) => (
			<div
				key={index}
				className='relative group'
				onClick={() => openFullScreen(image.big)}>
				<Image
					alt={`gallery picture ${index + 1}`}
					src={image.small}
					width={480}
					height={480}
				/>
				<div
					className={`bg-white bg-opacity-50 w-full h-full border border-black flex items-center justify-center absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-5%] group-hover:translate-x-[-5%]  transition-all duration-500`}>
					<FiPlus size={60} />
				</div>
			</div>
		));
	};

	return (
		<div className='my-[150px]'>
			<div className='lg:mx-52 mx-5 flex flex-col gap-2 mb-16'>
				<p className='font-quentin font-normal text-[#339994] text-[24px] lg:text-4xl'>
					{t('The Bestthings')}
				</p>
				<p className='font-raleway font-extralight text-[28px] lg:text-[40px] break-words'>
					{t('REVOLUTION GALLERY')}
				</p>
				<div className='flex flex-col gap-5 lg:flex-row items-start lg:items-center justify-between'>
					<p className='font-nunito font-normal text-lg text-[#616161BA] max-w-[60ch]'>
						{t(
							'Yellow tang sea devil tang, wrymouth killifish southern flounder weatherfish Cuckoo wrasse yellow jack redside'
						)}
					</p>
					<button className='animate-button w-[160px] h-[60px] font-raleway font-bold text-base'>
						{t('VIEW ALL')}
					</button>
				</div>
			</div>
			<div className='px-10  grid grid-cols-2 lg:flex items-center justify-evenly gap-7'>
				{renderImages()}
			</div>
			{isFullScreen && selectedImage && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 cursor-pointer'
					onClick={closeFullScreen}>
					<Image
						alt='Full-Screen Image'
						src={selectedImage}
						layout='fill'
						objectFit='contain'
					/>
				</div>
			)}
		</div>
	);
};

export default RevolutionGallery;

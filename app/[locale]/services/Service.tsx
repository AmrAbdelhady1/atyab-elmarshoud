import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ServiceProps {
	img: StaticImageData;
	title: string;
	desc: string;
}

const Service: React.FC<ServiceProps> = ({ img, title, desc }) => {
	return (
		<div className='relative group'>
			<div className='overflow-hidden'>
				<Image
					alt='for body'
					src={img}
					className='w-[416px] h-[360px] object-cover group-hover:scale-110 ease-in-out duration-500 max-sm:object-contain  max-sm:w-[330px] max-sm:h-[200px]'
				/>
				<div className='w-[416px] h-[360px] border border-black absolute bottom-[25px] right-[25px] max-sm:w-[330px] max-sm:h-[200px] max-sm:bottom-[25px] max-sm:right-[10px]'></div>
				<div className='absolute bottom-24 left-10'>
					<p className='text-[#eaaa85] text-6xl text-left font-semibold font-quentin tracking-wider'>
						{title}
					</p>
					<p className='text-[#eaaa85] text-lg text-left font-normal ml-1'>{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default Service;

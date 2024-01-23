import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';
import { IoLogoInstagram } from 'react-icons/io';

interface TeamCardProps {
	name: string;
	position: string;
	photo: StaticImageData;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, position, photo }) => {
	return (
		<div className='w-[240px] flex flex-col gap-2 relative'>
			<Image alt='team1' src={photo} width={250} height={300} />
			<div className='w-[250px] h-[305px] border border-black absolute bottom-[135px] right-[15px] max-sm:w-[167px] max-sm:h-[203px]'></div>
			<p className='text-center text-lg font-light tracking-wide'>{name}</p>
			<p className='text-center text-[0.950rem] text-gray-400 tracking-tight'>
				{position}
			</p>
			<div className='flex gap-4 items-center justify-center mt-4'>
				<div className='border border-black rounded-full p-1.5 hover:bg-[#EAAA85] hover:border-transparent transition-all'>
					<TiSocialTwitter />
				</div>
				<div className='border border-black rounded-full p-1.5 hover:bg-[#EAAA85] hover:border-transparent transition-all'>
					<TiSocialFacebook />
				</div>
				<div className='border border-black rounded-full p-1.5 hover:bg-[#EAAA85] hover:border-transparent transition-all'>
					<TiSocialLinkedin />
				</div>
				<div className='border border-black rounded-full p-1.5 hover:bg-[#EAAA85] hover:border-transparent transition-all'>
					<IoLogoInstagram />
				</div>
			</div>
		</div>
	);
};

export default TeamCard;

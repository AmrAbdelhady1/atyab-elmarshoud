import React from 'react';
import logo1Image from '../public/assets/images/about-us/logo-1.png';
import logo2Image from '../public/assets/images/about-us/logo-2.png';
import logo3Image from '../public/assets/images/about-us/logo-3.png';
import logo4Image from '../public/assets/images/about-us/logo-4.png';
import Image from 'next/image';

const PartnersContainer = () => {
	return (
		<div className='mx-52 my-36 flex flex-wrap items-center justify-evenly gap-10 max-sm:flex-col max-sm:w-full max-sm:justify-center max-sm:mx-0'>
			<Image alt='logo1' src={logo1Image} />
			<Image alt='logo2' src={logo2Image} />
			<Image alt='logo3' src={logo3Image} />
			<Image alt='logo4' src={logo4Image} />
		</div>
	);
};

export default PartnersContainer;

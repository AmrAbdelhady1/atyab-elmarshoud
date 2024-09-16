import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

import Image from 'next/image';

import { ContactLinks, SocialLinks } from '.';

import { MainLogoSvg } from '@/public/assets/svg/logo';
import paymentIcons from '@/public/assets/svg/payment-icons.svg';

const Footer = ({ lang }: any) => {
	const t = useTranslations();
	return (
		<footer className='w-full bg-[#1e1e1e] text-white relative pt-20 pb-6 footer'>
			<div className='flex flex-wrap justify-around gap-10 mb-32 max-sm:flex-col max-sm:items-center max-sm:justify-center'>
				<div className='flex flex-col gap-3'>
					<MainLogoSvg color='white' />
					<ContactLinks />
				</div>

				<div className='flex flex-col gap-3 w-full max-w-[300px]'>
					<h1 className='text-xl'>{t('Useful Links')}</h1>
					<div className='grid grid-cols-2 justify-between'>
						<Link href='/about-us' locale={lang} className='top-bar-link'>
							{t('About Us')}
						</Link>
						<Link href='/contact-us' className='top-bar-link'>
							{t('Contact Us')}
						</Link>
					</div>
					<div className='grid grid-cols-2 justify-between'>
						<Link href='/privacy-policy' locale={lang} className='top-bar-link'>
							{t('Privacy Policy')}
						</Link>
						<Link href='/return-policy' locale={lang} className='top-bar-link'>
							{t('Return Policy')}
						</Link>
					</div>
					<div className='grid grid-cols-2 justify-between'>
						<Link href='/branches' locale={lang} className='top-bar-link'>
							{t('Branches')}
						</Link>
						<Link href='/terms-and-conditions' locale={lang} className='top-bar-link'>
							{t('Terms & Conditions')}
						</Link>
					</div>
				</div>

				<div className='flex flex-col'>
					<h1 className='text-xl mb-5'>{t('Subscribe')}</h1>
					<input
						type='text'
						placeholder={t('Your Email')}
						className='pb-2 bg-transparent border-b border-b-white text-white focus:outline-none max-w-[350px] mb-2 max-md:w-[250px]'
					/>
					<button
						style={{
							backgroundImage: 'linear-gradient(135deg, white 50%, transparent 51%)',
						}}
						className='animate-button !bg-transparent !border-white !text-white !w-full hover:!text-[#232323] max-md:w-[250px]'>
						{t('Subscribe')}
					</button>
				</div>
			</div>

			<div className='border-t border-t-white/10 pt-10 px-2 flex flex-wrap justify-around mb-4 text-[#b1b0b0] max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-3'>
				<div>
					<h1 className='text-xs font-bold'>
						{t('All Rights Reserved')} &copy; {new Date().getFullYear()}
					</h1>
					<Link
						href='https://cryptdev.com/'
						target='_black'
						className='top-bar-link'>
						{t('Powered By')} AMR
					</Link>
				</div>
				<Image src={paymentIcons} alt='icons' className='w-fit h-fit' />
				<SocialLinks textColor='' linkStyle='footer-icons' />
			</div>
		</footer>
	);
};

export default Footer;

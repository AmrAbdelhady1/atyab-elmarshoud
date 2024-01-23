'use client';

import { Link } from '@/navigation';
import { Fragment, useEffect, useState } from 'react';
import { usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import { useSelector } from 'react-redux';

import Sidebar from './Sidebar';
import MenuBar from './MenuBar';
import { MainLogoSvg, TextLogoSvg } from '@/public/assets/svg/logo';

import { CgMenuGridO } from 'react-icons/cg';
import {
	LiaHeart,
	LiaSearchSolid,
	LiaShoppingCartSolid,
} from 'react-icons/lia';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { fetchCartProducts } from '@/redux/reducers/cartReducer';

const Navbar = ({ lang, categories }: any) => {
	const pathname = usePathname();
	const t = useTranslations();
	const dispatch = useAppDispatch();

	const [hideMenu, setHideMenu] = useState<boolean>(false);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
	const [isMenuOpen, setIsMenurOpen] = useState<boolean>(false);
	const cart = useSelector((state: any) => state.CartReducer);

	useEffect(() => {
		const fetchCart = async () => {
			await dispatch(fetchCartProducts());
		};

		fetchCart();
	}, []);

	const menuList = [
		{
			title: 'Home',
			link: '/',
			subList: [],
		},
		{
			title: 'The Shop',
			link: '#',
			subList: [...categories],
		},
		{
			title: 'Branches',
			link: '/branches',
			subList: [],
		},
		{
			title: 'Contact US',
			link: '/contact-us',
			subList: [],
		},
	];

	const handleMouseEnter = (index: number) => {
		setActiveIndex(index);
		setHideMenu(true);
	};

	const handleMouseLeave = () => {
		setActiveIndex(null);
		setTimeout(() => setHideMenu(false), 1000);
	};

	const handleOpenSidebar = () => {
		setIsSidebarOpen(true);
	};

	const handleCloseSidebar = () => {
		setIsSidebarOpen(false);
	};

	const handleMenuBar = () => {
		setIsMenurOpen(!isMenuOpen);
	};

	return (
		<>
			<nav
				className='w-full h-[80px] xl:h-[102px] bg-white flex items-center justify-between p-2 text-[#232323] whitespace-nowrap z-40 shadow-md sticky top-10'
				onMouseLeave={handleMouseLeave}>
				<div
					className='w-[88px] hidden xl:flex cursor-pointer h-[88px] border border-[#e0e0e0] items-center justify-center xl:top-bar-link'
					onClick={handleOpenSidebar}>
					<CgMenuGridO size={35} />
				</div>

				<Link href='/' locale={lang} className='cursor-pointer block xl:hidden'>
					<MainLogoSvg color={'black'} />
				</Link>

				<div className='items-center gap-20 hidden xl:flex'>
					{menuList.map((item, index) => (
						<Fragment key={index}>
							{index === 2 && <TextLogoSvg color='black' />}
							<div
								onMouseEnter={() => handleMouseEnter(index)}
								key={index}
								className={`flex items-center gap-2 h-[95px] border-b-transparent border-b-2 hover:border-b-black ease-in-out duration-300
                  relative text-[#232323] font-semibold cursor-pointer uppercase
                  ${item.link === pathname ? '!border-b-black' : ''}
                `}>
								<Link href={item.link} locale={lang}>
									{t(item.title)}
								</Link>
								{item.subList.length > 0 && (
									<p>{index === activeIndex ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
								)}
								{item.subList.length > 0 && hideMenu && (
									<div
										className={`absolute bg-[#1e1e1e] p-[30px] w-[310px] fade-in text-white z-40 flex flex-col gap-3 left-[-24px] top-[110%] ${
											index === activeIndex ? 'active' : ''
										}`}>
										{item.subList.map((list) => (
											<Link
												href={`/category/${list.id}`}
												locale={lang}
												key={list.id}
												className={`group flex items-center gap-2 top-bar-link ${
													pathname === '/category/' + list.id ? 'text-primary' : ''
												}`}>
												<span
													className={`h-[1px] inline-block bg-white group-hover:w-6 group-hover:bg-primary transition-[width] ease duration-300
                    ${
																					pathname === '/category/' + list.id
																						? 'w-6 !bg-primary'
																						: 'w-0'
																				}
                    `}>
													&nbsp;
												</span>
												{list.name}
											</Link>
										))}
									</div>
								)}
							</div>
						</Fragment>
					))}
				</div>

				<div className='flex items-center gap-2 text-3xl mx-3'>
					<div className='md:flex items-center gap-2 hidden mr-3'>
						<Link href={'/wishlist'} locale={lang} className='top-bar-link'>
							<LiaHeart />
						</Link>
						<LiaSearchSolid />
						<Link href={'/cart'} locale={lang} className='top-bar-link relative'>
							<LiaShoppingCartSolid />
							<div className='absolute top-[-30%] right-[-55%] bg-black rounded-full text-white text-xs font-nunito font-bold p-1 px-2'>
								{cart.quantity}
							</div>
						</Link>
					</div>
					<p className='block xl:hidden cursor-pointer' onClick={handleMenuBar}>
						<AiOutlineMenu />
					</p>
				</div>
			</nav>

			<Sidebar
				handleCloseSidebar={handleCloseSidebar}
				isSidebarOpen={isSidebarOpen}
			/>
			<MenuBar
				onClose={handleMenuBar}
				isMenuOpen={isMenuOpen}
				menuList={menuList}
			/>
		</>
	);
};

export default Navbar;

'use client';

import { Fragment, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useSelector } from 'react-redux';

import { IoIosArrowUp, IoIosArrowDown, IoIosClose } from 'react-icons/io';
import Link from 'next/link';
import {
	LiaHeart,
	LiaSearchSolid,
	LiaShoppingCartSolid,
} from 'react-icons/lia';

interface MenuListItem {
	name: string;
	id: string;
}

interface Props {
	onClose: () => void;
	isMenuOpen: boolean;
	menuList: {
		title: string;
		link?: string;
		subList: MenuListItem[];
	}[];
}

const MenuBar = ({ onClose, isMenuOpen, menuList }: Props) => {
	const t = useTranslations();
	const pathname = usePathname();
	const cart = useSelector((state: any) => state.CartReducer);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const handleIndexChange = (index: number) => {
		if (index === activeIndex) {
			setActiveIndex(null);
		} else {
			setActiveIndex(index);
		}
	};

	const handleClose = () => {
		setActiveIndex(null);
		onClose();
	};

	const showStyle = {
		height: 'auto',
		position: 'relative',
		zIndex: 50,
		paddingTop: '20px',
		paddingBottom: '20px',
		opacity: '1',
	};

	const hideStyle = {
		height: '0',
		paddingTop: '0',
		paddingBottom: '0',
		opacity: '0',
	};

	return (
		<div
			className={`w-full min-h-screen bg-black/50 fixed top-0 z-50 left-[-100%] overflow-y-auto block xl:hidden
      ${isMenuOpen && '!left-0'}
      `}>
			<div
				className={`w-full max-w-[350px] min-h-screen bg-white fixed top-0 right-[-100%] duration-500 ease-in-out
      ${isMenuOpen && '!right-0'}
      `}>
				<div className='flex items-center justify-end mx-1 my-8'>
					<IoIosClose
						className='text-[#b1b0b0] hover:text-primary ease-in-out duration-500'
						size={50}
						onClick={onClose}
					/>
				</div>

				{menuList.map((item, index) => (
					<Fragment key={index}>
						<div
							className='flex items-center justify-between p-5 border-b border-b-[#e0e0e0] font-raleway font-semibold text-[#232323] 
          text-[13px] uppercase cursor-pointer z-50 relative'
							onClick={() => handleIndexChange(index)}
							key={index}>
							<Link
								href={item.link!}
								className={`hover:text-primary ${
									item.subList?.some((list) => list.id === pathname) ||
									index === activeIndex
										? 'text-primary'
										: ''
								}`}
								onClick={() => item.subList.length === 0 && onClose()}>
								{t(item.title)}
							</Link>
							{item.subList.length > 0 && (
								<p>{index === activeIndex ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
							)}
						</div>
						{item.subList.length > 0 && (
							<div
								className='duration-300 ease-in-out p-5 px-10 bg-white border-b border-b-[#e0e0e0] flex flex-col gap-4 font-raleway text-[14px] text-[#232323]'
								style={index === activeIndex ? showStyle : hideStyle}>
								{item.subList.map((list) => (
									<Link
										href={`/category/${list.id}`}
										onClick={handleClose}
										key={list.id}
										className={`hover:text-primary flex items-center ${
											pathname === list.id && 'text-primary'
										}`}>
										<span
											className={`h-[1px]
                    ${pathname === list.id ? 'w-6 !bg-primary' : 'w-0'}
                    `}>
											&nbsp;
										</span>
										<p className={`${pathname === list.id && 'mx-2'}`}>{list.name}</p>
									</Link>
								))}
							</div>
						)}
					</Fragment>
				))}

				<div className='flex items-center gap-5 md:hidden p-5 text-[28px] cursor-pointer'>
					<Link href={'/cart'} className='relative'>
						<LiaShoppingCartSolid className='hover:text-primary' />
						<div className='absolute top-[-30%] right-[-55%] bg-black rounded-full text-white text-xs font-nunito font-bold p-1 px-2'>
							{cart.quantity}
						</div>
					</Link>
					<LiaSearchSolid className='hover:text-primary' />
					<Link href={'/wishlist'}>
						<LiaHeart className='hover:text-primary' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MenuBar;

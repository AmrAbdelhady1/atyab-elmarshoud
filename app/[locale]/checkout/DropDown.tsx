'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface Props {
	holder: string;
	onChange: (id: string) => void;
	items: any[];
	activeitem?: any;
}

const DropDown = ({ items, onChange, activeitem, holder }: Props) => {
	const t = useTranslations();
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(
		activeitem ?? { name: `Select a ${holder}` }
	);

	const handleItemChange = (item: any) => {
		onChange(item.id);
		setSelectedItem(item);
		setIsOpen(false);
	};

	return (
		<div className='relative w-full'>
			<div
				onClick={() => setIsOpen(!isOpen)}
				className={`border cursor-pointer ${
					isOpen ? 'border-black' : 'border-[#e0e0e0]'
				} px-[17px] py-[14px] h-[56px] w-full ${
					t('local') === 'ar' ? 'text-right' : 'text-left'
				}`}>
				{selectedItem.name}
				<span
					className={`absolute inset-y-0 flex items-center pr-4 pointer-events-none ${
						t('local') === 'ar' ? 'left-0 ml-2' : 'right-0'
					}`}>
					{!isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
				</span>
			</div>
			{isOpen && (
				<ul className='absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto'>
					{items.map((item: any) => (
						<li
							key={item.id}
							className='py-2 px-4 hover:bg-gray-100 cursor-pointer'
							onClick={() => handleItemChange(item)}>
							{item.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default DropDown;

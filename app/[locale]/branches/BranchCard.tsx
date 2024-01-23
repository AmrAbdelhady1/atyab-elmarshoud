import Link from 'next/link';
import { useTranslations } from "next-intl";

import { CiClock1 } from 'react-icons/ci';
import { FaPhone } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';

interface BranchCardProps {
	name: string;
	description: string;
	phoneNo: string;
	workingDays: string;
	workingHours: string;
	mapUrl: string;
}

const BranchCard: React.FC<BranchCardProps> = ({
	name,
	description,
	phoneNo,
	workingDays,
	workingHours,
	mapUrl,
}) => {
	const t = useTranslations();

	return (
		<div className='flex flex-col items-center justify-evenly border border-gray-300 rounded-md p-3 w-[285px] h-[353px]'>
			<IoLocation size={40} />
			<h2 className='font-bold'>{name}</h2>
			<p className='text-sm text-center'>{description}</p>
			<div className='flex items-center justify-around gap-2'>
				<FaPhone className='flex-[0.2]' size={13} />
				<p className='text-sm text-center flex-[0.8]'>{phoneNo}</p>
			</div>
			<div className='flex items-center justify-around gap-2'>
				<CiClock1 className='flex-[0.2]' size={15} />
				<p className='font-bold text-center flex-[0.8]'>{workingHours}</p>
			</div>
			<p className='text-sm text-center'>{workingDays}</p>
			<Link
				href={mapUrl}
				className='bg-black text-white text-sm rounded-md py-1 px-5'
				target='_blank'>
				{t("View Map")}
			</Link>
		</div>
	);
};

export default BranchCard;

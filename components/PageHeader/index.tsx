import React from 'react';
import { useTranslations } from "next-intl";

import './style.css';

interface Props {
	bgImgClassName: string;
	firstText: string;
	firstTextClassName?: string;
	secondText: string;
	secondTextClassName?: string;
}

const PageHeader = (props: Props) => {
	 const t = useTranslations();
	const {
		bgImgClassName,
		firstText,
		secondText,
		firstTextClassName,
		secondTextClassName,
	} = props;

	return (
		<section className={`${bgImgClassName} page-header w-full relative`}>
			<article className='absolute top-[50%] left-[4%]'>
				<h1
					className={`font-quentin text-[#6396d0] text-4xl ${firstTextClassName}`}>
					{t(firstText)}
				</h1>
				<h2
					className={`font-extralight text-[#232323] text-[45px] ${secondTextClassName}`}>
					{t(secondText)}
				</h2>
			</article>
		</section>
	);
};

export default PageHeader;

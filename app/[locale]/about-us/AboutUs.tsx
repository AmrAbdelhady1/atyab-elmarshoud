"use client"

import Image from "next/image";
import { useTranslations } from "next-intl";

import TeamCard from "./TeamCard";
import PartnersContainer from "@/components/PartnersContainer";
import { PreLoader } from "@/components";

import { FaPlay } from "react-icons/fa";

import headerImage from "@/public/assets/images/about-us/cover.jpg";
import marshoudImage from "@/public/assets/images/about-us/SulaimanMarshoud.jpg";
import siteStatisticsImage from "@/public/assets/images/about-us/sitestatistics.png";
import sideSplashImage from "@/public/assets/images/about-us/sidesplash.jpg";
import sideSplash2Image from "@/public/assets/images/about-us/sidesplash2.png";
import youtubeImage from "@/public/assets/images/about-us/youtube.jpg";
import team1Image from "@/public/assets/images/about-us/team-1.jpg";
import team2Image from "@/public/assets/images/about-us/team-2.jpg";
import team3Image from "@/public/assets/images/about-us/team-3.jpg";
import team4Image from "@/public/assets/images/about-us/team-4.jpg";

import {
  FreshTypesSvg,
  FloralTypesSvg,
  OceanicTypesSvg,
} from "@/public/assets/svg/FragranceTypesSvgs";

import { BASE_URL } from "@/constants/constants";

async function getAboutUs(locale: string) {
  try {
    const response = await fetch(`${BASE_URL}/about-us`, {
      headers: {
        locale,
      },
      cache: "force-cache",
    });
    const aboutUs = await response.json();
    return aboutUs.data;
  } catch (error) {
    console.log("Error fetching aboutUs.");
    console.log(error);
  }
}

const AboutUs = ({ data }:any) => {
  const t = useTranslations();
  const sanitizedHTML = { __html: data.content };
  // const playVideo = (videoUrl: string) => {
  //   window.open(videoUrl, "_blank");
  // };

  return (
    <>
      <PreLoader />
      <div className="mb-10 w-full">
        <Image
          alt="header image"
          src={headerImage}
          className="w-full h-[450px] object-cover"
        />
        <div className="mx-5 mt-32 flex items-start gap-16 max-md:flex-col max-md:gap-3">
          <div className="w-1/2 max-md:w-full flex flex-col items-center justify-center">
            <Image
              className="rounded-xl w-[485px]"
              alt="sulaiman marshoud image"
              src={data.image}
              width={450}
              height={450}
              priority
            />
            {/* <div className="flex items-center justify-around gap-8 mt-16 max-md:flex-col max-md:w-full max-md:gap-20">
              <div className="flex flex-col gap-5 items-center justify-center">
                <FreshTypesSvg />
                <p className="text-xl font-normal">{t("Fresh Types")}</p>
              </div>
              <div className="flex flex-col gap-5 items-center justify-center">
                <FloralTypesSvg />
                <p className="text-xl font-normal">{t("Floral Types")}</p>
              </div>
              <div className="flex flex-col gap-5 items-center justify-center">
                <OceanicTypesSvg />
                <p className="text-xl font-normal">{t("Oceanic Types")}</p>
              </div>
            </div> */}
          </div>
          <div className="w-1/2 flex flex-col max-md:w-full">
            <p
              className={`text-[2.5rem] font-semibold tracking-tight max-md:text-2xl text-start`}
            >
              {data.title}
            </p>
            {/* <p
              className={`text-[2.5rem] font-semibold tracking-tight max-md:text-2xl ${
                locale === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("WE CREATE MEMORIES")}
            </p> */}
            <p className="max-w-prose leading-loose text-sm text-gray-400 mt-3 max-md:w-full" dangerouslySetInnerHTML={sanitizedHTML}>
            </p>
            {/* <p className="max-w-prose leading-loose text-sm text-gray-400 mt-3 max-md:w-full">
              {t("about-2")}
            </p>
            <p className="max-w-prose leading-loose text-sm text-gray-400 mt-3 max-md:w-full">
              {t("about-3")}
            </p>
            <p className="max-w-prose leading-loose text-sm text-gray-400 mt-3 max-md:w-full">
              {t("about-4")}
            </p> */}
          </div>
        </div>

        <div className="mt-64 flex flex-col items-center justify-center max-md:w-full">
          <p className="text-center text-[2.5rem] font-semibold tracking-tight max-md:text-2xl">
            {t("OUR ACHIEVEMENTS")}
          </p>
          <p className="max-w-prose text-center  text-base text-gray-400 mt-5 tracking-wide max-md:w-full">
            {t("about-5")}
          </p>
          <div className="mt-7">
            <Image
              alt="site statistics"
              src={siteStatisticsImage}
              width={1250}
              height={245}
            />
          </div>
        </div>
        {/* <div className="flex max-md:w-full max-md:flex-col max-md:items-center max-md:justify-center relative">
          <Image
            alt="side splash"
            src={sideSplashImage}
            className={`max-md:hidden absolute top-32 ${
              locale === "ar" ? "left-0" : "left-0"
            }`}
          />
          <div className={`relative mx-[10%]`}>
            <Image
              alt="youtube image"
              src={youtubeImage}
              className="h-[700px] object-contain max-md:static"
            />
            <button
              className="absolute inset-0 bg-opacity-30 flex items-center justify-center cursor-pointer "
              onClick={() =>
                playVideo(
                  "https://www.youtube.com/channel/UCrK0y1uRONjVfnQBP1YlArQ/about"
                )
              }
            >
              <FaPlay
                size={50}
                color="white"
                className="hover:scale-125 transition-all duration-500"
              />
            </button>
          </div>
        </div> */}
        {/* <div className='mt-32 flex flex-wrap mx-52 items-center justify-between max-md:flex-col max-md:w-full max-md:px-5 max-md:mx-0 max-md:gap-5 max-md:items-start'>
					<div>
						<p
							className={`text-[2.5rem] font-extralight tracking-tight max-md:text-2xl ${
								locale === 'ar' ? 'text-right' : 'text-left'
							}`}>
							{t('OUR TEAM')}
						</p>
						<p
							className={`leading-loose text-base text-gray-500 mt-5 tracking-wide max-w-prose max-md:text-base max-md:leading-[1.875em] ${
								locale === 'ar' ? 'text-right' : 'text-left'
							}`}>
							{t(
								'Mosshead warbonnet queen triggerfish black bass scissor-tail rasbora–great white shark driftfish carpetshark swamp-eel rice eel'
							)}
						</p>
					</div>
					<button className='animate-button !w-[140px] !h-[50px]'>
						{t('VIEW MORE')}
					</button>
				</div>
				<div className='mx-52 mt-20 flex flex-wrap gap-10 items-center justify-evenly'>
					<TeamCard
						name={t('Mika Boosters')}
						position={t('Product Manager')}
						photo={team1Image}
					/>
					<TeamCard
						name={t('Huanita Concha')}
						position={t('Service Manager')}
						photo={team2Image}
					/>
					<TeamCard
						name={t('Pier Goodman')}
						position={t('Chief Manager')}
						photo={team3Image}
					/>
					<TeamCard
						name={t('Ellen Johnson')}
						position={t('Office Head')}
						photo={team4Image}
					/>
					<div className='absolute right-0 max-md:hidden'>
						<Image alt='side splash 2' src={sideSplash2Image} />
					</div>
				</div> */}
        <PartnersContainer />
      </div>
    </>
  );
};

export default AboutUs;

"use client";

import { useState } from "react";
import { useRouter, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

import { motion, AnimatePresence } from "framer-motion";

import { addData } from "@/axios/axiosClient";
import CurrenciesModal from "./CurrenciesModal";
import { SocialLinks } from ".";

import { FiPhone } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { deleteCookie } from "@/app/actions";

interface Currency {
  id: number;
  name: string;
  global_code: string;
  code: string;
  image: string;
  fees: number;
  currency_digits: 2;
}

interface Country {
  id: number;
  name: string;
  iso: string;
  currency: Currency;
  phone_key: string;
  start_delivery_range: number;
  end_delivery_rangle: number;
}

const TopBar = ({
  lang,
  countries,
  username,
  countryId,
}: {
  lang: any;
  countries: Country[];
  username: any;
  countryId: any;
}) => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const [isCurrencyModalVisible, setIsCurrencyModalVisible] =
    useState<boolean>(false);
  const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false);

  const [activeCountry, setActiveCountry] = useState<any>(
    countryId
      ? countries.find((item) => item.id === parseInt(countryId))
      : countries[0]
  );
  const handleCountryChange = (country: Country) => {
    setActiveCountry(country);
  };

  const handleChange = () => {
    const locale = lang === "en" ? "ar" : "en";
    router.push(pathname, { locale });
  };

  const handleLogOut = async () => {
    try {
      const res = await addData("", "logout");

      if (res) {
        await deleteCookie("auth-token");
        if (pathname === "/") {
          window.location.reload();
        } else {
          router.push("/");
        }
      }
    } catch {}
  };

  return (
    <>
      <div className="bg-[#1e1e1e] h-[40px] w-full text-white px-[1.389vw] flex items-center justify-between whitespace-nowrap z-50 shadow-md sticky top-0">
        <div className="flex items-center gap-2">
          <SocialLinks
            textColor=""
            linkStyle="top-bar-link mx-0 md:mx-1"
            isMotion={true}
          />
          <div className="top-bar-border" />
          <motion.a
            href="tel:+96522097333"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-primary cursor-pointer"
          >
            <FiPhone />
          </motion.a>
          <Link
            href="tel:+96522097333"
            className="top-bar-link !hidden md:!flex"
          >
            +965 22097333
          </Link>
        </div>

        <div className="flex items-center gap-[1.389vw]">
          <div
            className="top-bar-link cursor-pointer"
            onClick={() => setIsCurrencyModalVisible(true)}
          >
            {activeCountry?.currency.code}
          </div>
          <div
            className="top-bar-link cursor-pointer"
            onClick={() => handleChange()}
          >
            {t("language")}
          </div>
          <div className="top-bar-border" />
          {username ? (
            <div
              className="top-bar-link gap-2 cursor-pointer relative"
              onMouseEnter={() => setShowAccountMenu(true)}
              onMouseLeave={() => setShowAccountMenu(false)}
            >
              <h1 className="hidden md:block">
                {t("Hello,")} {username}
              </h1>
              <div className="block md:hidden">
                <IoPersonSharp />
              </div>
              <IoIosArrowDown />
              {showAccountMenu && (
                <div className="absolute bg-white p-4 flex flex-col gap-3 top-[100%] right-0 z-50 shadow-lg uppercase text-[#1e1e1e]">
                  <Link
                    href={"/profile"}
                    locale={lang}
                    className="top-bar-link"
                  >
                    {t("my account")}
                  </Link>
                  <p className="top-bar-link" onClick={handleLogOut}>
                    {t("logout")}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <Link href={"/login"} locale={lang} className="top-bar-link gap-2">
              <IoPersonSharp />
              <span className="hidden md:block">{t("Login / Register")}</span>
            </Link>
          )}
        </div>
      </div>

      <AnimatePresence mode="sync">
        {isCurrencyModalVisible && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="w-full h-full bg-black opacity-70 fixed inset-0 z-[55] cursor-pointer"
              onClick={() => setIsCurrencyModalVisible(false)}
            ></motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CurrenciesModal
                onClose={() => setIsCurrencyModalVisible(false)}
                countries={countries}
                activeCountry={activeCountry}
                onCountryChange={handleCountryChange}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopBar;

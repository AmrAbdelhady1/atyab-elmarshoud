"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

import { IoClose, IoSearchSharp } from "react-icons/io5";
import { addCookie } from "@/app/actions";

interface Props {
  onClose: () => void;
  countries: Country[];
  activeCountry: Country;
  onCountryChange: (country: Country) => void;
}

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

const CurrenciesModal = ({
  onClose,
  countries,
  activeCountry,
  onCountryChange,
}: Props) => {
  const t = useTranslations();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleCloseModal = () => {
    onClose();
  };

  const handleCountrySelect = (country: Country) => {
    onCountryChange(country);
    addCookie("country-id", country.id);
    addCookie("currency", country.currency.code);
    addCookie("iso", country.iso);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-[50%] h-fit bg-[#1e1e1e] fixed top-[15%] left-[30%] z-[60] shadow-lg rounded-md max-md:w-full max-md:inset-0 max-md:top-10">
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-b-white p-3">
          <p className="font-raleway font-normal text-2xl leading-9 text-white">
            {t("Change Currency")}
          </p>
          <IoClose
            color="white"
            size={30}
            className="cursor-pointer"
            onClick={handleCloseModal}
          />
        </div>
        {/* Search */}
        <div className="flex items-center mx-auto w-[95%] rounded bg-white">
          <input
            className="w-full border-none bg-transparent px-4 text-gray-400 outline-none focus:outline-none font-nunito font-normal"
            type="search"
            name="search"
            placeholder={t("Search by country")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="m-2 rounded bg-[#1e1e1e] px-4 py-2 text-white"
          >
            <IoSearchSharp />
          </button>
        </div>
        {/* Currencies */}
        <div className="flex flex-col overflow-y-auto bg-white m-2 rounded-md p-2 max-h-[430px]">
          {filteredCountries.map((country: Country) => (
            <div
              key={country.id}
              className="flex items-center justify-between cursor-pointer"
              onClick={() => {
                handleCountrySelect(country);
                handleCloseModal();
              }}
            >
              <div className="flex items-center gap-5">
                <Image
                  alt="currency"
                  src={country.currency.image}
                  width={35}
                  height={35}
                />

                <div className="flex flex-col">
                  <p className="font-raleway font-semibold text-xl">
                    {country.name}
                  </p>
                  <p className="font-nunito font-normal text-base">
                    {country.currency.name}
                  </p>
                </div>
              </div>
              <input
                type="radio"
                name="currency"
                id="currency"
                checked={country.name === activeCountry.name}
                onChange={() => {
                  handleCountrySelect(country);
                  handleCloseModal();
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrenciesModal;

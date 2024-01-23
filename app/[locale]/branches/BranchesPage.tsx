"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

import { PreLoader } from "@/components";
import BranchCard from "./BranchCard";

interface CountryBranches {
  id: number;
  name: string;
  image: string;
  branches: Branch[];
}

interface Branch {
  id: number;
  country_id: number;
  name: string;
  map_url: string;
  phone: string;
  sort: number;
  active: number;
  description: string;
  work_days: string;
  work_times: string;
}

interface BranchesPageProps {
  branchesData: CountryBranches[];
}

const BranchesPage: React.FC<BranchesPageProps> = ({ branchesData }) => {
  const t = useTranslations();
  const [activeCountry, setActiveCountry] = useState<CountryBranches>(
    branchesData[0]
  );
  const [countries] = useState<CountryBranches[]>(branchesData);

  return (
    <>
      <PreLoader />

      <div className="my-16 ml-20 mr-40 flex gap-24 max-md:flex-col max-md:mx-2 max-md:mt-0">
        <div className="flex-[0.2] flex flex-col">
          <h1 className="text-2xl font-bold my-10">{t("BRANCHES")}</h1>
          <div className="border border-gray-300 rounded-md flex flex-col items-center justify-center ml-4 overflow-x-auto max-md:flex-row max-md:justify-start">
            {countries.map((country) => (
              <div
                key={country.id}
                className={`w-full max-md:w-[100px] ${
                  activeCountry.name === country.name
                    ? "bg-black text-white"
                    : ""
                }`}
              >
                <div
                  className="p-3 px-5"
                  onClick={() => setActiveCountry(country)}
                >
                  <p className="cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap max-md:text-sm max-md:max-w-[10ch]">
                    {country.name}
                  </p>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-[0.8] flex justify-center gap-5 flex-wrap mt-[115px] max-md:mt-0">
          {activeCountry.branches.map((branch: Branch) => (
            <div key={branch.id}>
              <BranchCard
                name={branch.name}
                description={branch.description}
                phoneNo={branch.phone}
                workingDays={branch.work_days}
                workingHours={branch.work_times}
                mapUrl={branch.map_url}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BranchesPage;

"use client";

import { useTranslations } from "next-intl";

import { ContactLinks, SocialLinks } from ".";
import { IoIosClose } from "react-icons/io";
import { MainLogoSvg } from "@/public/assets/svg/logo";

interface SidebarProps {
  handleCloseSidebar: () => void;
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  handleCloseSidebar,
  isSidebarOpen,
}) => {
  const t = useTranslations();
  return (
    <div
      className={`w-full min-h-screen bg-black/50 fixed top-0 z-50 left-[-100%]
      ${isSidebarOpen && "!left-0"}`}
    >
      <div
        className={`max-w-[430px] w-full fixed top-0 min-h-screen bg-[#1e1e1e] ${
          t("local") === "ar" ? "right-[-100%]" : "left-[-100%]"
        } duration-500 ease-in-out
      ${isSidebarOpen ? (t("local") === "ar" ? "!right-0" : "!left-0") : ""}`}
      >
        <div className="flex items-center justify-end mx-8 my-8 cursor-pointer">
          <IoIosClose
            className="text-[#b1b0b0] hover:text-primary ease-in-out duration-500"
            size={50}
            onClick={handleCloseSidebar}
          />
        </div>
        <div className="flex flex-col gap-16 mx-12">
          <div>
            <MainLogoSvg color="#b1b0b0" />
            <p className="text-[#b1b0b0] text-lg mt-4">{t("sidebar-1")}</p>
          </div>
          <div className="mt-8">
            <p className="text-white font-raleway text-[28px]">
              {t("Contact Us")}
            </p>
            <div className="flex flex-col gap-4 mt-3 text-[#737373]">
              <ContactLinks />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-white text-3xl font-raleway mt-5">
              {t("Follow us")}
            </p>
            <SocialLinks textColor="text-white" linkStyle="footer-icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

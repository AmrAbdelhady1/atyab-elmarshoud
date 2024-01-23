"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { addData } from "@/axios/axiosClient";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ForgetPassword = ({ isOpen, onClose }: Props) => {
  const router = useRouter();
   const t = useTranslations();
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
    if (email) {
      const res = await addData({ email }, "forget");

      if (res) {
        router.push(`/reset-password?email=${email}`, { scroll: false });
      } else {
        setError(t("Email is wrong"));
      }
    } else {
      setError(t("Email is required"));
    }
  };

  return (
    <div
      className={`w-full min-h-screen bg-black/50 fixed left-0 overflow-hidden z-50 top-[-100%] flex items-center justify-center
    ${isOpen && "!top-0"}
    `}
    >
      <div
        className={`text-start m-auto w-full h-fit max-w-[500px] text-[#232323] bg-white p-5 rounded-md shadow-2xl
        top-[-100%] fixed duration-500 ease-in-out ${isOpen && "!top-[30%]"}
      `}
      >
        <h1 className="text-[24px] font-raleway mb-6">
          {t("Password Recovery")}
        </h1>
        {error && <p className="error-text text-center mb-6">{error}</p>}
        <input
          type="text"
          name="email"
          id="forget-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("Email Address")}
          className="h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black mb-6"
        />
        <div className="flex items-center gap-6">
          <button
            type="button"
            className="animate-button w-full h-[50px]"
            onClick={onClose}
          >
            {t("Close")}
          </button>
          <button
            type="button"
            className="animate-button w-full h-[50px]"
            onClick={handleSubmit}
          >
            {t("Send")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";

import { addData } from "@/axios/axiosClient";

import { PreLoader } from "@/components";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const t = useTranslations();
  const [error, setError] = useState<string>("");

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("Enter a valid email"))
      .required(t("Email is required")),
    password: Yup.string().required(t("Password is required")),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password")], t("Passwords must match"))
      .required(t("Password Confirmation is required")),
    activation_code: Yup.string().required(t("Password is required")),
  });

  const formik = useFormik({
    initialValues: {
      email: searchParams.get("email") ?? "",
      password: "",
      password_confirmation: "",
      activation_code: "",
    },
    enableReinitialize: true,
    validationSchema: ResetPasswordSchema,
    onSubmit: () => handleSubmit(),
  });

  const handleSubmit = async () => {
    const res = await addData(formik.values, "reset-password");

    if (res) {
      toast.success(t("Password successfully changed"));
    } else {
      setError(t("activation code or email address is wrong"));
    }
  };

  return (
    <div>
      <PreLoader />

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-start text-start mx-auto my-20 w-[90%] max-w-[370px] text-[#232323]"
      >
        <h1 className="text-[24px] font-raleway mb-6">{t("Reset Password")}</h1>
        {error && (
          <p className="error-text text-center mx-auto mb-6">{error}</p>
        )}

        {formik.touched.email && formik.errors.email && (
          <p className="error-text">{formik.errors.email}</p>
        )}
        <input
          type="text"
          name="email"
          id="email_reset"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder={t("Email Address")}
          className="h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black mb-6"
        />

        {formik.touched.password && formik.errors.password && (
          <p className="error-text">{formik.errors.password}</p>
        )}
        <input
          type="password"
          name="password"
          id="password_reset"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder={t("Password")}
          className="h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black mb-6"
        />

        {formik.touched.password_confirmation &&
          formik.errors.password_confirmation && (
            <p className="error-text">{formik.errors.password_confirmation}</p>
          )}
        <input
          type="password"
          name="password_confirmation"
          id="password_confirmation_reset"
          value={formik.values.password_confirmation}
          onChange={formik.handleChange}
          placeholder={t("Confirm Password")}
          className="h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black mb-6"
        />

        {formik.touched.activation_code && formik.errors.activation_code && (
          <p className="error-text">{formik.errors.activation_code}</p>
        )}
        <input
          type="text"
          name="activation_code"
          id="activation_code_reset"
          value={formik.values.activation_code}
          onChange={formik.handleChange}
          placeholder={t("Activation Code")}
          className="h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black mb-6"
        />

        <button type="submit" className="animate-button w-full h-[50px] mb-2">
          {t("Reset")}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;

import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { useTranslations } from "next-intl";
import * as Yup from "yup";

import { updateData } from "@/axios/axiosClient";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const UpdatePassword = ({ isOpen, onClose }: Props) => {
  const t = useTranslations();
  const [error, setError] = useState<string>("");

  const RegisterDataSchema = Yup.object().shape({
    old_password: Yup.string().required(t("Password is required")),
    password: Yup.string().required(t("Password is required")),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required(t("Password Confirmation is required")),
  });

  const formik = useFormik({
    initialValues: {
      old_password: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: RegisterDataSchema,
    onSubmit: () => handleSubmit(),
  });

  const handleClose = () => {
    onClose();
    formik.resetForm();
    setError("");
  };

  const handleSubmit = async () => {
    const res = await updateData({ ...formik.values }, "update-password");

    if (res) {
      toast.success(t("Password successfully changed"));
      handleClose();
    } else {
      setError(t("Old Password is wrong"));
    }
  };

  return (
    <div
      className={`w-full min-h-screen bg-black/50 fixed left-0 overflow-hidden z-50 top-[-100%] flex items-center justify-center
    ${isOpen && "!top-0"}
    `}
    >
      <form
        onSubmit={formik.handleSubmit}
        className={`text-start m-auto w-full h-fit max-w-[500px] text-[#232323] bg-white p-5 rounded-md shadow-2xl
        top-[-100%] fixed duration-500 ease-in-out ${isOpen && "!top-[30%]"}
      `}
      >
        <h1 className="text-[24px] font-raleway mb-6">{t("Edit Password")}</h1>
        {error && <p className="error-text text-center mb-6">{error}</p>}
        <div className="mb-6">
          <input
            type="password"
            name="old_password"
            id="old-password"
            value={formik.values.old_password}
            onChange={formik.handleChange}
            placeholder={t("Old Password")}
            className="h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black"
          />
          {formik.touched.old_password && formik.errors.old_password && (
            <p className="error-text">{formik.errors.old_password}</p>
          )}
        </div>
        <div className="mb-6">
          <input
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder={t("Password")}
            className="h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="error-text">{formik.errors.password}</p>
          )}
        </div>
        <div className="mb-6">
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            value={formik.values.password_confirmation}
            onChange={formik.handleChange}
            placeholder={t("Confirm Password")}
            className="h-[56px] w-full border border-[#e0e0e0] py-[14px] px-[17px] focus:outline-none focus:border-black"
          />
          {formik.touched.password_confirmation &&
            formik.errors.password_confirmation && (
              <p className="error-text">
                {formik.errors.password_confirmation}
              </p>
            )}
        </div>
        <div className="flex items-center gap-6">
          <button
            type="button"
            className="animate-button w-full h-[50px]"
            onClick={handleClose}
          >
            {t("Close")}
          </button>
          <button type="submit" className="animate-button w-full h-[50px]">
            {t("Update")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;

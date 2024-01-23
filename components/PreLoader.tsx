"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PreLoader = () => {
  const [showLoader, setShowLoader] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  }, []);

  return (
    showLoader && (
      <div className="fixed w-full top-0 bottom-0 left-0 right-0 min-h-screen z-50 bg-white flex items-center justify-center">
        <motion.img
          className="w-[100px] h-[100px]"
          src="https://atyabalmarshoud.com/web/assets/images/favicon/safari-pinned-tab.svg"
          animate={{ scale: ["100%", "70%", "100%"] }}
          transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
        />
      </div>
    )
  );
};

export default PreLoader;

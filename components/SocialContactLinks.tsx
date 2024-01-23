"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export const ContactLinks = () => {
  const links = [
    {
      id: 1,
      label: "58 White St., New York",
      link: "https://maps.google.com/maps?q=29.378586,47.990341&z=15",
      icon: <CiLocationOn />,
    },
    {
      id: 2,
      label: "hello@atyabalmarshoud.com",
      link: "mailto:hello@atyabalmarshoud.com",
      icon: <TfiEmail />,
    },
    {
      id: 3,
      label: "+965 22097333",
      link: "tel:+96522097333",
      icon: <FiPhone />,
    },
  ];
  return (
    <>
      {links.map((item) => (
        <div key={item.id} className="flex items-center gap-3">
          {item.icon}
          <Link href={item.link} className="top-bar-link text-white">
            {item.label}
          </Link>
        </div>
      ))}
    </>
  );
};

export const SocialLinks = ({
  textColor,
  linkStyle,
  isMotion,
}: {
  textColor: string;
  linkStyle: string;
  isMotion?: boolean;
}) => {
  const links = [
    {
      id: 1,
      link: "https://twitter.com/atyabalmarshoud",
      icon: <FaTwitter />,
    },
    {
      id: 3,
      link: "#",
      icon: <FaFacebookF />,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/company/atyab-al-marshoud-co/?originalSubdomain=kw",
      icon: <FaLinkedinIn />,
    },
    {
      id: 4,
      link: "https://www.instagram.com/atyabalmarshoud",
      icon: <FaInstagram />,
    },
  ];
  return (
    <div className={`flex items-center gap-2 ${textColor}`}>
      {links.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          target="_blank"
          className={linkStyle}
        >
          {isMotion ? (
            <motion.span whileHover={{ y: -4 }} whileTap={{ scale: 0.9 }}>
              {item.icon}
            </motion.span>
          ) : (
            item.icon
          )}
        </Link>
      ))}
    </div>
  );
};

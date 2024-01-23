import type { Metadata } from "next";
import { Nunito_Sans, Raleway } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import useTextDirection from "../useTextDirection";
import Provider from "./provider";
import { Toaster } from "react-hot-toast";

const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const quentin = localFont({
  src: "../../public/assets/fonts/Quentin.otf",
  variable: "--font-quentin",
});

export const metadata: Metadata = {
  title: "Atyab Almarshoud Perfume Company",
  description: "Welcome to Atyab Al Marshoud.com, Since 1925 in Kuwait",
  icons: {
    icon: {
      url: "https://atyabalmarshoud.com/web/assets/images/favicon/favicon.png",
    },
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const direction = useTextDirection(locale);
  const messages = useMessages();

  return (
    <html lang={locale} dir={direction}>
      <body
        className={`${nunito.variable} ${quentin.variable} ${raleway.variable} font-nunito`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Toaster position="top-right" />
          <Provider child={children} lang={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

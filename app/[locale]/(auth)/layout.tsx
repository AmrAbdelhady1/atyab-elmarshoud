import type { Metadata } from "next";

import "../globals.css";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}

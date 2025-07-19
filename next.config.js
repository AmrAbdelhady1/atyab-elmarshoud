/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true, // 👈 add this line
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "atyab-staging.cryptdev.com",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
};

const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl(nextConfig);

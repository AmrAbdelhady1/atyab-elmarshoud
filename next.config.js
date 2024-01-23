/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'atyab-staging.cryptdev.com',
				port: '',
				pathname: '/storage/**',
			},
		],
	},
};

const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl(nextConfig);

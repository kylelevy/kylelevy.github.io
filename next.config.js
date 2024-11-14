/** @type {import('next').NextConfig} */

const nextConfig = {
	distDir: 'dist',
	experimental: {
		staleTimes: {
			dynamic: 30, // Re-fetch dynamic routes after 30 seconds
			static: 180, // Re-fetch static routes after 3 minutes
		},
	},
};

module.exports = nextConfig;

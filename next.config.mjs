/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    logger: {
      warn: function (message) {
        console.warn(message)
      },
      debug: function (message) {
        console.log(message)
      }
    }
  },
  images: {
    domains: [
      'www.datocms-assets.com',
    ],
  },
};

export default nextConfig;

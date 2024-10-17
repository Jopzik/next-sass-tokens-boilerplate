/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    logger: {
      warn: function (message) {
        console.warn(message)
      },
      debug: function (message) {
        console.log(message)
      }
    }
  }
};

export default nextConfig;

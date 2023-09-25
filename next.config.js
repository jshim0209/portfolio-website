/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ntvb.tmsimg.com",
      },
    ],
  },
};

module.exports = nextConfig;

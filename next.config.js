/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "img-monsternotebook.mncdn.com",
      "i.picsum.photos",
      "www.monsternotebook.com.tr",
    ],
    imageSizes: [253],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // strictMode: true,

  experimental: {
    styledComponent: true,
  },
};

module.exports = nextConfig;

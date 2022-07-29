/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["img-monsternotebook.mncdn.com", "i.picsum.photos"],
  },
};

module.exports = nextConfig;

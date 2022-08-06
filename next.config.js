/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["img-monsternotebook.mncdn.com", "i.picsum.photos"],
    imageSizes: [253],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Home",
        permanent: true,
      },
    ];
  },

  // strictMode: true,

  experimental: {
    styledComponent: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "1000logos.net", "links.papareact.com"],
  },
  env: {
    mapbox_key: process.env.MAPBOX_KEY,
  },
};

module.exports = nextConfig;

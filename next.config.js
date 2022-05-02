/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["1000logos.net", "links.papareact.com"]
  },
  env: {
    mapbox_key: "pk.eyJ1IjoiYWtpYnJhaGltdWciLCJhIjoiY2wybWt2a2VsMXJrODNqcDlpazRxb2d0ayJ9.q4vlBnKNYUclWO5wwAU_xA"
  }
}

module.exports = nextConfig

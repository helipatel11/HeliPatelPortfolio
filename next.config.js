/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/HeliPatelPortfolio",
  assetPrefix: "/HeliPatelPortfolio",
}

module.exports = nextConfig

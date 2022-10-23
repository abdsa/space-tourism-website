/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.raw$/,
      use: "raw-loader",
    });
    return config;
  },
  swcMinify: true,
}

module.exports = nextConfig

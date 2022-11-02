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
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    experimental: {
      appDir: true,
    },
  },
}

module.exports = nextConfig
z1
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "loremflickr.com", "lh3.googleusercontent.com"],
  },
  env: {
    WEATHER_ACCESS_TOKEN: process.env.WEATHER_ACCESS_TOKEN,
    currency_access_tokens: process.env.CURRENCY_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    CURRENCY_ACCESS_TOKEN: process.env.CURRENCY_ACCESS_TOKEN,
    FORMSPREE_API: process.env.FORMSPREE_API,
    STRIPE_KEY: process.env.STRIPE_KEY,
    SPACE_ID: process.env.SPACE_ID,
    CONTENT_DELIVERY_TOKEN: process.env.CONTENT_DELIVERY_TOKEN,
    CONTENT_MANAGEMENT_TOKEN: process.env.CONTENT_MANAGEMENT_TOKEN,
  },
};

module.exports = nextConfig;

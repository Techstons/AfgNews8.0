/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    // en-US English (United States)
    // ru-RU Russian (Russia)
    // ps-AR Pashto (Afghanistan)
    // fa-IR Farsi (Iran)
    locales: ["en-US", "ru-RU", "ps-AR", "fa-IR"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en-US",
    localeDetection: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],

    loader: "cloudinary",
    path: "https://res.cloudinary.com/domgv4rvm/image/upload/",
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

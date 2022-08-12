/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
  },
  env: {
    CURRENCY_ACCESS_TOKEN: process.env.CURRENCY_ACCESS_TOKEN,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID,
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_API_SERVER: process.env.MAILCHIMP_API_SERVER,
    FORMSPREE_API: process.env.FORMSPREE_API,
    STRIPE_KEY: process.env.STRIPE_KEY,
    SPACE_ID: process.env.SPACE_ID,
    CONTENT_DELIVERY_TOKEN: process.env.CONTENT_DELIVERY_TOKEN,
    CONTENT_MANAGEMENT_TOKEN: process.env.CONTENT_MANAGEMENT_TOKEN,
  },
};

module.exports = nextConfig;

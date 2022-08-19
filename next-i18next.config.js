// next-i18next.config.js
module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    // en English
    // ru Russian
    // ps Pashto
    // fa Farsi
    locales: ["en", "fa"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
    localeDetection: true,
  },
};

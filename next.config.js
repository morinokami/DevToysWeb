const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
  },
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});

module.exports = nextConfig;

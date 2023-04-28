/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
  //  */
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
  basePath: '/Bcard-website',
  assetPrefix: '/Bcard-website/',
  output: 'standalone',
}

module.exports = nextConfig

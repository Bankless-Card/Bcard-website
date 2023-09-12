/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    unoptimized : true
  }

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
  // output: 'export',
  // async rewrites() {
  //   return [
  //     {
  //       source: "/ajax/",
  //       destination: "https://formsubmit.co/ajax/",
  //     },
  //   ];
  // },
}

module.exports = nextConfig

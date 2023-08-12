/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')

const nextConfig = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  restrictMode: true,
}

module.exports = nextConfig;
module.exports = nextTranslate()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    TEST_RESULTS: process.env.TEST_RESULTS,
  },
};
const withPlugins = require('next-compose-plugins');
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  ...nextConfig,
});

module.exports = async (phase) => withPlugins([withNextra], nextConfig)(phase, { undefined });
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
const withPlugins = require('next-compose-plugins');
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  ...nextConfig,
});




module.exports = async (phase) => withPlugins([withNextra], nextConfig)(phase, { undefined });
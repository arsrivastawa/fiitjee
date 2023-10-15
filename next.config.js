/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  output: "export",
  css: {
    modules: true, // Enable CSS modules
  },
};

module.exports = nextConfig;

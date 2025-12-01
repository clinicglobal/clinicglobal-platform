/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "img.clinicglobal.com",
      "cdn.clinicglobal.com"
    ],
  },

  trailingSlash: false,

  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;

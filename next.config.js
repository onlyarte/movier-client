/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  experimental: {},
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'image.tmdb.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;

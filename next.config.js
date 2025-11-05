/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname + '/app',
      '@/components': __dirname + '/components',
      '@/constants': __dirname + '/constants',
      '@/lib': __dirname + '/lib',
      '@/types': __dirname + '/types',
    };
    return config;
  },
};

module.exports = nextConfig;

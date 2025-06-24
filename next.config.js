/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose',
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Force the ES Module version of Kinde SDK
      config.resolve.alias = {
        ...config.resolve.alias,
        '@kinde-oss/kinde-typescript-sdk': '@kinde-oss/kinde-typescript-sdk/dist/index.js'
      };
    }
    return config;
  },
};

module.exports = nextConfig;
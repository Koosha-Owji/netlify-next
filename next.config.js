/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Ignore expo-secure-store module that's not needed in Next.js
    config.externals = config.externals || [];
    config.externals.push('expo-secure-store');
    
    return config;
  },
};

module.exports = nextConfig;

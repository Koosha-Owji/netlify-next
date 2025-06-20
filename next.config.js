/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      // enable Node.js–style middleware support
      nodeMiddleware: true,
    },
    webpack: (config, { isServer }) => {
      // Ignore expo-secure-store module that's not needed in Next.js
      config.externals = config.externals || [];
      config.externals.push('expo-secure-store');
      
      return config;
    },
    // (you can keep any other flags you already have here)
  }
  
  module.exports = nextConfig
  
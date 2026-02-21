import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Allow images from the public directory and any external sponsor logos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;

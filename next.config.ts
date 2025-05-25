
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // This tells Next.js to export a static site
  trailingSlash: true, // Ensures URLs like /about/ are generated, often better for static hosts
  images: {
    unoptimized: true, // Necessary for static exports as Next.js image optimization requires a server
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;


import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // This tells Next.js to export a static site
  trailingSlash: true, // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  images: {
    unoptimized: true, // Important for static exports if not using a Next.js compatible image optimization service
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

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // This tells Next.js to export a static site
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  // Note: The following configurations from the previous file were overwritten by your new snippet.
  // If you need them, you'll need to add them back:
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'placehold.co',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // },
};

export default nextConfig;

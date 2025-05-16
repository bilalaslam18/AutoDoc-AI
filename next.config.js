/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // https://nextjs.org/docs/app/api-reference/next-config-js/serverComponentsExternalPackages
  experimental: {
    serverComponentsExternalPackages: ['mermaid'],
  },
};

module.exports = nextConfig;
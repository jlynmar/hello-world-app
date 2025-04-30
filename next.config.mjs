const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/hello-world-app/' : '',
  basePath: isProd ? '/hello-world-app' : '',
  output: 'export'
};

export default nextConfig;
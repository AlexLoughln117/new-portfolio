// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Needed for static export
    images: {
      unoptimized: true, // Needed for static export / GH Pages
    },
    reactStrictMode: true,
    // Ensure NO basePath or assetPrefix settings are present here!
  };
  export default nextConfig;
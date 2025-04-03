// next.config.mjs
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
let nextConfig = {
    // output: 'export', // Needed for static export
    images: {
      unoptimized: true, // Needed for static export / GH Pages
    },
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], 
  };

  const withMDX = createMDX({
    // Add options here if needed, like remark/rehype plugins
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });
  
  // Merge MDX config with existing config
  nextConfig = withMDX(nextConfig);

  export default nextConfig;
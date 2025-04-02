// next.config.mjs (Correct ES Module syntax)

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Keep any other unrelated configurations you need.
    // Remember to keep export/basePath/image settings removed
    // as the GitHub Action handles them automatically.
  };
  
  export default nextConfig; // <-- Use 'export default' instead
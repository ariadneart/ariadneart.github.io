/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  // Replace 'your-repo-name' with your actual GitHub repository name
};

export default nextConfig;
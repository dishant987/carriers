import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/your-report/personality-explorer/understanding', // Change to your desired route
        permanent: true, // Set to true for a 301 redirect
      },
    ];
  },
};

export default nextConfig;

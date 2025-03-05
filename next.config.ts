import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["tca-payload.vercel.app", "localhost", "admin.tca.com.sa"], // Add the required domain here
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

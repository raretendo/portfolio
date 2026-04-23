import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  // Next.js will not optimize images when self-hosted with "output: export"
  // This was added to silence an error
  images: { unoptimized: true }
};

export default nextConfig;

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/chefs-kitchen/" : "",
  basePath: process.env.DEPLOYED_GITHUB_PATH || "",
  output: "export",
};

export default nextConfig;

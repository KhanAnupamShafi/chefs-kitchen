/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/chefs-kitchen/" : "",
  basePath: isProd ? "/chefs-kitchen" : "",
  output: "export",
};

export default nextConfig;

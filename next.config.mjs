/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: isProd ? "/chefs-kitchen" : "",
  assetPrefix: isProd ? "/chefs-kitchen/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

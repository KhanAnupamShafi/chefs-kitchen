/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: isProd ? "/materialpro-nextjs-free" : "",
  assetPrefix: isProd ? "/materialpro-nextjs-free/" : "/",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;

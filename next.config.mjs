/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.bing.com", "bing.com", "i.pinimg.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "imgcdn.stablediffusionweb.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "www.bing.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;

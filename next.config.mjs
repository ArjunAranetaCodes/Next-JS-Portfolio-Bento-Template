/** @type {import('next').NextConfig} */
const nextConfig = {
  //basePath: "/design",
  basePath: "/design",
  output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/profile_images/**",
      },
    ],
  },
};

export default nextConfig;

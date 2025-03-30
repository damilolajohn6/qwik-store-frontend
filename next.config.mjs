/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: "https://qwik-fashion-admin.netlify.app",
    //NEXT_PUBLIC_API_URL: "http://localhost:3001",
  },
};

export default nextConfig;

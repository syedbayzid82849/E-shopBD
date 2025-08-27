// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "example.com", /
            },
            {
                protocol: "https",
                hostname: "www.google.com", 
            },
        ],
    },
};

export default nextConfig;

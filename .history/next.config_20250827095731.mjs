// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "example.com", // এখানে তোমার ইমেজ হোস্ট হবে
            },
            {
                protocol: "https",
                hostname: "www.google.com", // google image allow করলে
            },
        ],
    },
};

export default nextConfig;

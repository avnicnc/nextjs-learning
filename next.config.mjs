/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'wpnext.local',
      },
      {
        protocol: 'https',
        hostname: 'wpnext.local',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '192.168.1.17',
      }
    ],
  },
};

export default nextConfig;

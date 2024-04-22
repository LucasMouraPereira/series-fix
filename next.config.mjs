/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static.tvmaze.com'],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

export default nextConfig

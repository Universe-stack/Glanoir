/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


module.exports = {
  async redirects() {
    return [
      {
        source: '/payments/info',
        destination: '/payments/success',
        permanent: true,
      },
    ]
  },
}
/** @type {import('next').NextConfig} */
const nextConfig = { experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "s3.us-west-2.amazonaws.com",
      "nuevapagina.s3.amazonaws.com",
      "s3-us-west-2.amazonaws.com",
      "s3.amazonaws.com",
      "archivos-comunes.s3.amazonaws.com",
      "images.unsplash.com",
      "aula.desarrolloglobal.pe",
      "archivos-comunes.s3.us-east-1.amazonaws.com"
    ],
  },}

module.exports = nextConfig

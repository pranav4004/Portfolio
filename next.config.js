/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'portfolio-bice-five-28.vercel.app'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-bice-five-28.vercel.app',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizeImages: true
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize images
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 75
            },
            optipng: {
              enabled: true,
              optimizationLevel: 7
            },
            pngquant: {
              quality: [0.7, 0.9],
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 80
            }
          }
        }
      ]
    });
    return config;
  }
}

module.exports = nextConfig

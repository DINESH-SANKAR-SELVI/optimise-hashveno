import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,webmanifest}'],
      },
      includeAssets: ['**/*'],
      manifest: {
        name: 'HashVeno',
        short_name: 'HashVeno',
        description: 'Innovate & Elevate: Transforming Shop Management for the Future.',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: "/assets/HashVenoLogos/favicon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/assets/HashVenoLogos/favicon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/assets/HashVenoLogos/favicon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any"
          }
        ],
        screenshots: [
          {
            src: "/assets/HashVenoLogos/favicon-1024x768.jpg",
            type: "image/jpg",
            sizes: "1024x768",
            form_factor: "wide"
          },
          {
            src: "/assets/HashVenoLogos/favicon-320x320.png",
            type: "image/png",
            sizes: "320x320",
            form_factor: "narrow"
          }
        ],
      },
      devOptions: {
        enabled: false, // Enable PWA in development mode
      },
    }),
  ],
  base: '/',
  resolve: {
    alias: {
      buffer: 'buffer/',
      process: 'process/browser',
    },
  },
  define: {
    'process.env': {},
  },
})
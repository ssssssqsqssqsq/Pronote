import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// [https://vitejs.dev/config/](https://vitejs.dev/config/)
export default defineConfig({
plugins: [
vue(),
VitePWA({
registerType: 'autoUpdate',
includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
manifest: {
name: 'Papillon V4',
short_name: 'Papillon',
description: 'Application Vue 3 avec PWA intégrée',
theme_color: '#000000',
background_color: '#000000',
display: 'standalone',
start_url: '/',
icons: [
{
src: '/pwa-192x192.png',
sizes: '192x192',
type: 'image/png'
},
{
src: '/pwa-512x512.png',
sizes: '512x512',
type: 'image/png'
},
{
src: '/pwa-512x512.png',
sizes: '512x512',
type: 'image/png',
purpose: 'any maskable'
}
]
}
})
],
resolve: {
alias: {
'@': fileURLToPath(new URL('./src', import.meta.url))
}
}
})

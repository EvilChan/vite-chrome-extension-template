import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import webExtension from '@samrum/vite-plugin-web-extension'
import manifest from './src/manifest'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 9999,
  },
  plugins: [
    vue(),
    eslint({
      include: ['src/**/*.ts', 'src/**/*.vue'],
    }),
    webExtension({
      manifest: {
        ...manifest,
      },
      useDynamicUrlWebAccessibleResources: false,
    }),
  ],
})

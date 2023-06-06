import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr({
      exportAsDefault: true,
      svgrOptions: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor: true,
              },
            },
          ],
        },
      },
    }),
    react(),
    checker({ typescript: true }),
  ],
  server: { port: 3000, host: '127.0.0.1' },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8000'),
    __PROJECT__: JSON.stringify('frontend'),
  },
  css: {
    modules: {
      generateScopedName: '[path][name]__[local]--[hash:base64:5]',
      localsConvention: 'camelCase',
    },
    devSourcemap: true,
  },
});

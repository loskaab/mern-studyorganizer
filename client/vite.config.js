import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/mern_starter/',
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      img: 'src/img',
    },
  },
});

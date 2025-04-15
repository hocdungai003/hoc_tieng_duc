import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base:'/hoc_tieng_duc/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

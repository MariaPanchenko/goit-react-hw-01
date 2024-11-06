import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    sourcemap: true,
    base: mode === 'production' ? '/goit-react-hw-01/' : '/',
  },
}));

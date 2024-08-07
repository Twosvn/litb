import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  },
  plugins: [react()],
});

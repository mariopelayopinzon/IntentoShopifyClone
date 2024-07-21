// vite.config.js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [
    reactRefresh(),
  ],
  optimizeDeps: {
    include: ['jwt-decode'], // Añadir jwt-decode a las dependencias optimizadas
  },
});

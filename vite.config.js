import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
    preview: {
      host: '0.0.0.0',
      port: 4173,
    },
    build: {
      target: 'es2020',
      sourcemap: false,
    },
    define: {
      __SITE_URL__: JSON.stringify(env.VITE_SITE_URL || 'https://www.refugepoint.org'),
    },
  };
});

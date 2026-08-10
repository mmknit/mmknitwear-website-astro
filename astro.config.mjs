import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.mmknitwear.com',
  base: '/mmknitwear-website-astro/',
  integrations: [react()],
  build: {
    assets: 'assets',
  },
  trailingSlash: 'always',
});
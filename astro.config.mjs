import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.mmknitwear.com',
  base: '/',
  build: {
    assets: 'assets',
  },
  trailingSlash: 'always',
});
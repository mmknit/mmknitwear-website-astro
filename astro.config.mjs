import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.mmknitwear.com',
  base: '/mmknitwear-website-astro/',
  build: {
    assets: 'assets',
    inlineStylesheets: 'always',
  },
  trailingSlash: 'always',
});

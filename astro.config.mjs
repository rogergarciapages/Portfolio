import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build
export default defineConfig({
  site: 'https://rogerportfolio.oncewerehumans.com',
  server: {
    host: true,
    port: 4321,
    allowedHosts: ['rogerportfolio.oncewerehumans.com']
  },
  preview: {
    host: true,
    port: 4321
  },
  vite: {
    server: {
      allowedHosts: ['rogerportfolio.oncewerehumans.com']
    },
    preview: {
      allowedHosts: ['rogerportfolio.oncewerehumans.com']
    }
  },
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dodocosleep.com',
  integrations: [sitemap({ filter: (page) => !page.includes('/success') })],
});

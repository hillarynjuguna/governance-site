import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap({
      filter: (page) => {
        return !page.includes('/api/') && !page.includes('/404');
      },
      serialize(item) {
        if (item.url === 'https://governance-site.vercel.app/') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (item.url.includes('/cir-diagnostic-engine')) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
        } else if (
          item.url.includes('/bainbridge-warning') ||
          item.url.includes('/rsps-architecture') ||
          item.url.includes('/ce-ledger') ||
          item.url.includes('/delta-instrument') ||
          item.url.includes('/sovereign-types')
        ) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],
  site: 'https://governance-site.vercel.app',
});

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
  site: 'https://governance-site.vercel.app',
});

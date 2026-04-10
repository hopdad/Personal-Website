// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://hopdad.github.io',
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap(), mdx()],
  build: {
    assets: 'assets',
  },
});

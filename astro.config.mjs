import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://sarinsaurabh.github.io',
  base: '/sarinsaurabh.in',
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: [mdx()]
});

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://sarinsaurabh.in',
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: [mdx()]
});

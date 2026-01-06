import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sarinsaurabh.in',
  output: 'static',
  build: {
    format: 'directory'
  }
});

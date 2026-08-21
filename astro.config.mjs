// @ts-check
import { defineConfig } from 'astro/config';
import integrationPdf from './src/integration-pdf.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://alessio2122.github.io',
  base: '',
  server: {
    host: true,
    port: 4321
  },
  integrations: [integrationPdf()],
});
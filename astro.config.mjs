import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://lyonkabel.github.io',
  base: '/my-static-site/',
  integrations: [tailwind()]
});
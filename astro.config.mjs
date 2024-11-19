// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  // base: 'anthony2708',
  site: 'https://www.builetuananh.name.vn',

  integrations: [starlight({
    title: "BLTA",
    disable404Route: true,
  })],
});
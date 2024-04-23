import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  adapter: node({
    mode: "standalone"
  }),
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'one-dark-pro',
      // Alternatively, provide multiple themes
      // https://shiki.style/guide/dual-themes
      themes: {
        light: 'one-dark-pro',
        dark: 'one-dark-pro',
      },
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  }
});
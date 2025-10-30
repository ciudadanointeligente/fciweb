import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import alpinejs from '@astrojs/alpinejs';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [react(), markdoc(), keystatic(), alpinejs(), icon()],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@keystatic/astro'],
    },
  },

  adapter: netlify(),
});
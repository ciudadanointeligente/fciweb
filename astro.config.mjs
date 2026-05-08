import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import alpinejs from "@astrojs/alpinejs";
import icon from "astro-icon";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://fciweb.netlify.app/",
  output: "server",
  integrations: [markdoc(), keystatic(), alpinejs(), icon(), react()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify({
    imageService: "cloudinary",
  }),
});
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import alpinejs from "@astrojs/alpinejs";
import icon from "astro-icon";

export default defineConfig({
  site: "https://fciweb.netlify.app/",
  output: "server",
  integrations: [react(), markdoc(), keystatic(), alpinejs(), icon()],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      force: true,
    },
  },

  adapter: netlify({
    imageService: "cloudinary",
  }),
});

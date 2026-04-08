import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import alpinejs from "@astrojs/alpinejs";
import icon from "astro-icon";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://keys.club/",
  output: "static",
  integrations: [
    react(),
    markdoc(),
    ...(isProduction ? [] : [keystatic()]),
    alpinejs(),
    icon(),
  ],

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

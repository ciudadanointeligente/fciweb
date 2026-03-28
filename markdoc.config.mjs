import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    aside: component("./src/components/Aside.astro"),
  },
});

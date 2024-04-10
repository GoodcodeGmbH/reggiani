import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://www.reggianistd.com",
  base: "/",
  trailingSlash: "never",

  output: "static",

  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    react({
      experimentalReactChildren: true,
    }),
  ],

  vite: {
    resolve: {
      alias: {
        "@lib": "/src/lib",
        "@utils": "/src/utils",
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@assets": "/src/assets",
        "@pages": "/src/pages",
        "@i18n": "/src/i18n",
      },
    },
  },
});

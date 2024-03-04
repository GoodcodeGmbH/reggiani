import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://reggiani.pages.github.io/",
  base: "/reggiani",
  output: "static",
  integrations: [tailwind(), mdx(), sitemap(), react()],
  i18n: {
    locales: ["it", "de", "en", "fr"],
    defaultLocale: "it",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    ssr: {
      noExternal: ["svgo"],
    },
  },
});

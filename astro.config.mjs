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
    resolve: {
      alias: {
        // "paths": {
        //   "@lib/*": ["lib/*"],
        //   "@utils/*": ["utils/*"],
        //   "@components/*": ["components/*"],
        //   "@layouts/*": ["layouts/*"],
        //   "@assets/*": ["assets/*"],
        //   "@pages/*": ["pages/*"],
        //   "@i18n/*": ["i18n/*"],
        // },

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

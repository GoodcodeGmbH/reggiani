/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        reggianiRed: "#EC3831",
      },
      fontFamily: {
        sans: [
          "Montserrat Variable",
          "Montserrat",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          "Playfair Variable",
          "Playfair",
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

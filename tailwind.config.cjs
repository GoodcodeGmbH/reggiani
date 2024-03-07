/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        "4xl": "2000px",
      },
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

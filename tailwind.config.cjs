const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        BrandBlue: '#4A8CF7',
        BrandGreen: '#22947C', 
        BrandTeal: '#324E6C',
        BrandOrange: '#e67239',
      },
      fontFamily: {
        customFont: ['Heebo', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },

  plugins: [forms, typography],
};

module.exports = config;

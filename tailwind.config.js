/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,svg}",
    "./content/**/*.{html,md}",
    "./themes/**/layouts/**/*.{html,svg}",
    "./themes/**/assets/**/*.{js,ts,vue,jsx,tsx}",
    "./assets/**/*.{js,ts,vue,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};



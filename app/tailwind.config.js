/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto','sans-serif'], // Default sans font
        merienda: ['Merienda', 'serif'], // Correctly named
        rubikGlitch: ['Rubik Glitch', 'cursive'], // Ensure exact name
      },
    },
  },
  plugins: [],
}


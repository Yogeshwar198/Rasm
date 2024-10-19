// tailwind.config.mjs
import colors from './config/colors.js'; // Use ES module import

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors, // Spread the imported colors here
      },
    },
  },
  plugins: [],
};

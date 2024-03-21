/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: 'rgba(24, 24, 24, 1)',
        white: 'rgba(245, 245, 245,1)',
        brown_dark: 'rgba(39, 1, 1, 1)',
        red_dark: 'rgba(114, 0, 23, 1)',
        yellow: 'rgba(216, 212, 131, 1)',
        yellow_hover: 'rgba(217, 172, 42, 1)',
        brown: 'rgba(118, 63, 2, 1)',
      }
    },
  },
  plugins: [],
}


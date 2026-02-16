/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0a0a0a',
          dark: '#1a1a1a',
          gold: '#C5A059',
          goldHover: '#b08d4b',
          white: '#f9fafb',
          gray: '#4b5563'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    backgroundColor:{
      'dark blue' : 'rgb(36, 39, 44)'
    }
    },
  },
  plugins: [],  
}
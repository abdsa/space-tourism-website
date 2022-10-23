/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "hsl(230,35%,7%)",
        "primary": "hsl(230,35%,7%)",
        "secondary": "hsl(0,0%,100%)",
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/page.tsx",
  ],
  theme: {
    screens: {
      'tablet': '768px',

      'desktop': '1440px',

      'mobile': '375px',
    },
    extend: {
      colors: {
        "main-bg": "hsl(230,35%,7%)",
        "primary": "hsl(230,35%,7%)",
        "secondary": "hsl(231, 77%, 90%)",
      },
      fontFamily: {
        "barlowC": "'Barlow Condensed', sans-serif;",
        "barlow": "'Barlow', sans-serif;",
        "bellefair": "'Bellefair', sans-serif;"
      },
      fontSize: {
        "2xlHeading": "9.375rem",
        "xlHeading": "6.25rem",
        "lgHeading": "3.5rem",
        "mdHeading": "2rem",
        "smHeading": "1.75rem",
        "smSubHeading": "0.875rem",
        "navText": "1rem",
        "bodyText": "1.125rem",
      },
      letterSpacing: {
        "smSubHeading": "0.147rem",
        "navText": "0.169rem",
        "smHeading": "0.297rem",
      }
    },
  },
  plugins: [],
}

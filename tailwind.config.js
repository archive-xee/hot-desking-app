/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#003358',
      'teal': '#00756f',
      'purple': '#410268',
      'yellow': '#ffd900',
      'white': '#fafaff',
      'black': '#3c3c3c',
    },
  },
  plugins: [],
}
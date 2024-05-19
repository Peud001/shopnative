/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0D0D0D',
        secondary: '#898C2E',
        tertiary: '#FFFFFF',
        ash: '#808080',
        bgc: '#3C3C3C'
      }
    },
  },
  plugins: [],
}


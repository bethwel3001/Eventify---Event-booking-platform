/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0077ff",
        "primary-dark": "#0056b3",
        secondary: "#ff9900",
      },
    },
  },
  plugins: [],
}
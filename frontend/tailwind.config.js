/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  // BYE BYE VANILLA CSS
  // tailwind my new CATCH!
  theme: {
    extend: {
      // keyframes animations
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        // fadeOut: "fadeOut 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      colors: {
        primary: "#0077ff",
        "primary-dark": "#0056b3",
        secondary: "#ff9900",
      },
    },
  },
  plugins: [],
}

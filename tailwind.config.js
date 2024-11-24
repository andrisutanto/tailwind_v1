/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          black: "#050729",
          purple: {
            100: "#F3F0F8",
            500: "#5313CA"
          },
        },
      },
    },
  },
  plugins: [],
}


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
          gray: {
            100: "#EDEEF2",
            500: "#989AAE"
          },
          purple: {
            100: "#F3F0F8",
            500: "#5313CA"
          },
          yellow: {
            500: "#FF9736"
          },
          aqua: "#75F1F1",
        },
      },
    },
  },
  plugins: [],
}


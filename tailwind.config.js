/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // ⭐ Your custom colors
      colors: {
        primary: "#2bdee6",
        primaryDark: "#124175",
        darkgray: "#1a1f25",
        lighgray: "#272c35",
      },

      // ⭐ Container settings
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      



      
  },
  plugins: [],
}
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,jsx}"
    ],
  theme: {
    extend: {
      colors: {
        grayish: "#3A3B3C",
        grayte: "#B0B3B8",
        blackish: "#242526",
        blackite: "#18191A",
        blackwash: "rgba(0,0,0,0.4)",
        blueish: "#0866FF"
      },
      padding: {
        "x70": "0 16.7rem 0 16rem"
      },
      spacing: {
        "4/5": "80%"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/App.js",
      "./src/components/NavigationBar.js",
      "./src/pages/Profile.js",
      "./src/components/Profile/Posts.js",
      "./src/components/PostItem.js",
    ],
  theme: {
    extend: {
      colors: {
        grayish: "#3A3B3C",
        grayte: "#B0B3B8",
        blackish: "#242526",
        blackite: "#18191A",
        blueish: "#0866FF"
      },
      padding: {
        "x70": "0 16.7rem 0 16rem"
      }
    },
  },
  plugins: [],
}


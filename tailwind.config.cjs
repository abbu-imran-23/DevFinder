/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': "#f6f8ff",
        'bgContentColor': "#fefefe",
        'textColor': "#4b6a9b",
        'textAltColor': "#2b3442",
        // Buttons
        'buttonColor': "#0079ff",
        'buttonHoverColor': "#60abff"
      },
      backgroundImage: {
        'profileImage': "url(./assets/images/search-icon.svg)"
      }
    },
  },
  plugins: [],
}
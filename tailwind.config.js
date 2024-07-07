/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'], // Specify the HTML file to scan for class usage
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',  // Light green
        secondary: '#FF9800',  // Orange
        background: '#F5F5F5',  // Light grey
        text: '#212121',  // Dark grey
        accent: '#82B1FF',  // New accent color
      },
      fontFamily: {
        sans: ['Inter', 'Sans-serif'],
      },
    },
  },
  plugins: [],
}

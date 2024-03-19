/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom-image': "url('./assets/images/soccer1.jpg')",
      }
      
    },
  },
  plugins: [],
}


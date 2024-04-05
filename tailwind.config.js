/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          sen: ['Sen'],
          mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"' , '"Courier New"']
          
        }
      
      
    },
  },
  plugins: [],
}


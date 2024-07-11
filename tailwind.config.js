/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/Components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customCol1 : '#b0c4f4',
        customCol2 : '#f0d4dc',
        customCol3 : '#f0e4ec'
      }
    },
  },
  plugins: [],
};

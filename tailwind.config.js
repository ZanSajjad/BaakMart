/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust this path based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        poppin: ['Poppins', 'sans-serif'], // Corrected to 'poppin' instead of 'popinn'
      },
    },
  },
  plugins: [],
}

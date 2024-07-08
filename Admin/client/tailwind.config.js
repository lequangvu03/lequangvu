/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'ligt-blue': '#F0F9FF',
        'light-pink': '#FEF6FB',
        'light-ivory': '#FEFBEC'
      },
      backgroundImage: {
        linear: 'linear-gradient(to right, #feaf00, #f8d442)'
      },
      colors: {
        primary: '#FEAF00'
      },
      fontFamily: {
        bold: 'MontserratBold'
      }
    }
  },
  plugins: []
}

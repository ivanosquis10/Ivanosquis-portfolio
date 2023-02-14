/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 10px 10px 1px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};

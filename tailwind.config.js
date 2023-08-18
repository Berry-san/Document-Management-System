/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#4ECCA3',
        black_color: '#393E46',
        dark_color: '#232931',
        dull_white: '#F4F4F4',
        grey_color: '#3F572A',
        border_color: '#D6D6D6',
      },
    },
  },
  plugins: [],
}

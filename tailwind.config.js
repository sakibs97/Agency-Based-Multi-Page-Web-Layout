/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dmSans': ['DM Sans', 'sans-serif'],
        'pop': ['Poppins', 'sans-serif'],
        'nuni': ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        banbg: "URL(./src/assets/banner/Image1.png)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
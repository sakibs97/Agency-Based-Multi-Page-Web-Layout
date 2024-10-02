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
        banbg: "URL(./src/assets/banner/watermark.png)",
        coursebg: "URL(./src/assets/course/watermarkC.png)",
        map: "URL(./src/assets/map/map.png)",
      },
      colors:{       
        'main':'#1A1A1A',
        'ptag':'#6B6161',
        
      },
      gradientColorStops:{
        'startC':'#FE651B',
        'endC':'#FFAA52',
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
    animation: {
      fadeOut: 'fadeOut 2s ease forwards',
    },
    keyframes: {
      fadeOut: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
  },
  plugins: [],
}
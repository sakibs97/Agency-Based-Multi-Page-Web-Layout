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
        footer: "URL(./src/assets/footer/footer.png)",
        service_banner: "URL(./src/assets/Services/service.png)",
        service_after_banner: "URL(./src/assets/Services/banner.png)",
        service_work_banner: "URL(./src/assets/Services/work/banner.png)",
        service_we_work_banner: "URL(./src/assets/Services/work/workban.png)",
        service_support_banner: "URL(./src/assets/Services/work/support/banner.jpg)",
        service_support_banner_after: "URL(./src/assets/Services/work/support/after.png",
      },
      colors:{       
        'main':'#1A1A1A',
        'ptag':'#6B6161',        
      },
      gradientColorStops:{
        'startC':'#FE651B',
        'endC':'#FFAA52',
      },
      boxShadow: {
        'custom': '2px 6px 8px rgba(54,97,252, 0.5)', 
        'custom-shadow': '0 8px 16px rgba(54,97,252, 0.7)',
      },     

    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
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
  plugins: [
    
  ],
}
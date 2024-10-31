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
        ban_bg: "URL(./src/assets/banner/watermark.png)",
        ban_after_bg: "URL(./src/assets/banner/Shape.png)",
        course_bg: "URL(./src/assets/course/watermarkC.png)",
        map: "URL(./src/assets/map/map.png)",
        footer: "URL(./src/assets/footer/footer.png)",
        service_banner: "URL(./src/assets/Services/service.png)",
        service_after_banner: "URL(./src/assets/Services/banner.png)",
        service_work_banner: "URL(./src/assets/Services/work/banner.png)",
        service_we_work_banner: "URL(./src/assets/Services/work/workban.png)",
        service_support_banner: "URL(./src/assets/Services/work/support/banner.jpg)",
        service_support_banner_after: "URL(./src/assets/Services/work/support/after.png)",
        service_support_banner_after2: "URL(./src/assets/Services/work/support/after2.png)",
        service_details_banner: "URL(./src/assets/services/service-details/service-banner.png)",
        portfolio_banner: "URL(./src/assets/team-member/profolio/portfolio.jpg)",
        pricing_banner: "URL(./src/assets/pricing/pricing.jpg)",
        pricing_details_banner: "URL(./src/assets/pricing/icon/banner.png)",
        not_found_banner: "URL(./src/assets/404/404_page.png)",
        contact_banner: "URL(./src/assets/contact/contact.jpg)",
        team_banner: "URL(./src/assets/team/team.jpg)",
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
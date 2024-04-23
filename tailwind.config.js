/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins :  "'Poppins', sans-serif",
      },

        spacing: {
          '8xl' : '120rem',
         
        }
      , colors:{
        common : '#FF7F50'
      },
      fontSize:{
        'sd' : '9px'
      }
    
    },
  },
  plugins: [require("daisyui")],
}
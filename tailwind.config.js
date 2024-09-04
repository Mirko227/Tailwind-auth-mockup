/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {

    colors: {
      'yellow':'#F9F5F0',
      'yellow-10':'#E0DDD8',
      'yellow-20':'#C7C4C0',
      'yellow-30':'#AEACA8',

      'login-blue' : '#2F2E41',
      'login-blue-tint-10' : '#444354',
      'login-blue-tint-20' : '#595867',
      'login-blue-tint-30' : '#6D6D7A',
      'login-blue-tint-40' : '#82828D',
      'login-blue-tint-50' : '#9797A0',

      'login-pink' : '#FF6884',
      'transparent' : 'rgb(0,0,0,0)',


      'sign-up-blue' : '#343B59',
      'sign-up-blue-tint-95' : '#F5F5F7',
      'sign-up-blue-tint-80' : '#D6D8DE',
      'sign-up-blue-tint-70' : '#C2C4CD',

      'sign-up-white' : '#FEFEFE',
      'sign-up-pink' : '#FF8198',
      'sign-up-pink-tint-10' : '#FFA3B4',
      'sign-up-pink-tint-40' : '#FFB3C1'
    
    },

    fontSize: {
      'small' : '0.875rem',
      'base': '1rem',
      '76': '4.768rem',
      '61': '3.815rem',
      '48': '3rem',
      '39': '2.441rem',
      '31': '1.953rem',
      '25' : '1.563rem',
      '20': '1.25rem',
    },
    

    extend: {
      fontFamily: {
        'lora': ['Lora','serif'],
        'quattrocento': ['Quattrocento','serif'],
      },
      
      container: {
        center: true
      },

      spacing: {

        '2xl': 'clamp(72px,9.375vw,180px)',
        'xl': 'clamp(24px,8.338vw,128px)',
        'lg': 'clamp(8px,6.254vw,96px)',
        'mobile': '0',

        '85%': '85%',
        '90%': '90%',
        '100%': '100%',  
        '45%': '45%',
        
        'loginSvg2XL': 'clamp(580px,45%,630px)',
        'loginSvgXL' : 'clamp(520px,45%,530px)',
        'loginSvgLG' : 'clamp(456px,45%,600px)',

        'registerSvg2XL': 'clamp(590px,45%,700px)',
        'registerSvgXL' : 'clamp(540px,50%,650px)',
        'registerSvgLG' : 'clamp(450px,50%,560px)'
      },

      screens: {
      'sm' : '540px',
      'xs' : '432px',
      '2xs': '356px'
      },

    },
    
    
  },
  plugins: [],
}

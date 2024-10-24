/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {

      screens: {
        'mobile-m': '375px',
        'mobile-l': '425px',
        'mobile-xl': '480px',
        'mobile-2xl': '668px',
        'laptop-s': '992px',
        'Desktop-l': '1440px',
        'Desktop-xl': '2560px',
        '4k': '3000px',
      },
      fontFamily: {
        'manrope': ['manrope'],
        'manrope-bold': ['manrope-bold'],

      },
      boxShadow: {

        "sign-up-btn": '0 0 12px white',
        'customShadow': '0px -95px 150px -70px rgb(232, 234, 236)',
      },
      animation: {
        'meet': "meet 1.5s linear forwards",
        'black': "black 1.5s linear forwards"
      },
      keyframes: {
        'meet': {
          '0%, 50%': {
            transform: 'rotateX(90deg)',
          },
          '50%, 100%': {
            transform: 'rotateX(0deg)',
          },
        },
        'black': {
          "0%": {
            transform: 'rotateX(90deg)',

          },
          "60%": {
            transform: 'rotateX(90deg)',
          },
          "100%": {
            transform: 'rotateX(0deg)',

          },
        },
      },


    },

  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['manrope'],
        'manrope-bold': ['manrope-bold'],

      },
      boxShadow: {
        "sign-up-btn": '0 0 12px white',
      },
      animation: {
        'meet': "meet-black 2s linear forwards",
        'black': "meet-black 2s .5s linear forwards"
      },
      keyframes: {
        'meet-black': {
          '0%, 50%': {
            transform: 'rotateX(90deg)'
          },
          "50%, 100%": {
            transform: "rotateX(0deg)"
          }

        }
      }
    },
  },
  plugins: [],
}


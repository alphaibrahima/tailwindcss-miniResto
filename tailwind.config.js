module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#06b6d4',
        alpha:{
          100: '#9333ea',
          200: '#2563eb'
        }
      },
      fontSize:{
        pro: '10rem',
      }, 
      fontFamily:{
        nunitro: 'Nunito',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

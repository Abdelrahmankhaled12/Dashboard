/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsk,ts}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        "nav_color": "rgb(35,48,68)",
        "nav-item-color": "#9DA4AE",
        "nav-item-active-bg": "rgba(255, 255, 255, 0.04)",
        "blue": "#4782da",
        "backGroundColor": "rgb(27, 38, 53)"
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      screens: {
        'md': '992px',
        'mdd' : '800px'
      },
    },
  },
  plugins: [],
}


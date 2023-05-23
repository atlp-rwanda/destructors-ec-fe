

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ['Raleway', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      borderRadius: {
        circle: '50%'
      },
      colors: {
        brand: "#37475A",
        primary: '#37475A',
        secondary:'#2D719D',
        hover: '#053A80',
        hover2: '#f3f7fc',
        background: '#fafafa',
        red: '#de3929',
        sidebar: '#F4F4F4',
        active: '#E2E6EB',
        hovercancel: '#9B1A1B',
        cancel: '#9B1A1A',
      },
    },
    screens: {
      xs: { max: "425px" },
      sm: { min: "426px" },
      md: { min: "769px" },
      mdl:{ min: "1024px"},
      lg: { min: "1440px" },
      xl: { min: "2560px" },
    },
  },
  plugins: [],
};

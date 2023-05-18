/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
      },
      borderRadius: {
        circle: '50%',
        backgroundImage: {
          login: "",
        },
        colors: {
          brand: "#37475A",
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
      },
      screens: {
        xs: { max: "425px" },
        sm: { min: "426px" },
        md: { min: "769px" },
        lg: { min: "1440px" },
        xl: { min: "2560px" },
      },
    },
    variants: {},
    plugins: [],
  },
};


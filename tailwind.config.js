/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        circle: '50%',
      },
      colors: {
        primary: '#1B73E8',
        hover: '#053A80',
        hover2: '#f3f7fc',
        background: '#fafafa',
        red: '#de3929',
        sidebar: '#F4F4F4',
        active: '#E2E6EB',
        hovercancel: '#9B1A1B',
        cancel: '#9B1A1A',
        customBlue: '#2D719D',
        customYellow: '#E9C368',
        customGreen: '#2E9E8F',
        customGray: '#37475A',
        customBlack: '#131A22',
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

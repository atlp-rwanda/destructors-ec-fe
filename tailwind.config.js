/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
      },
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
      },
    },
  },
  variants: {},
  plugins: [],
};


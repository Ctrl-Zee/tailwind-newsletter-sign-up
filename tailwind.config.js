/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: "url('./assets/images/icon-list.svg')",
      },
      colors: {
        tomato: 'hsl(4, 100%, 67%)',
        'dark-slate-grey': 'hsl(234, 29%, 20%)',
        'charcoal-grey': 'hsl(235, 18%, 26%)',
        grey: 'hsl(231, 7%, 60%)',
        pink: 'hsl(346, 100%, 66%)',
        orange: 'hsl(13, 90%, 60%)',
        'light-orange': 'hsl(5, 100%, 95%)',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};

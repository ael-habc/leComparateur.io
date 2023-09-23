/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nonito: ["Nonito"],
      nonit: ["Nonit"]
    }
    ,
    extend: {
      backgroundImage: {
        'hero': "url('./assets/images/Hero.svg')",
      }
    },
  },
  plugins: [],
};

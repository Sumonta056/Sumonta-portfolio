/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
        teal2 : '#1eb2a6',
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      keyframes: {
        updown: {
          '0%': {
            transform: 'translateY(-20px)',
          },
          '50%': {
            transform: 'translateY(20px)',
          },
          '100%': {
            transform: 'translateY(-20px)',
          },
        },

        updownSmall: {
          '0%': {
            transform: 'translateY(-10px)',
          },
          '50%': {
            transform: 'translateY(10px)',
          },
          '100%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      animation: {
        updown: 'updown 3s linear infinite',
        updownS: 'updownSmall 3s linear infinite',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
};

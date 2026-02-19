/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#d1d5db",
        tertiary: "#1a0a0a",
        "black-100": "#1c1c1c",
        "black-200": "#0f0f0f",
        "white-100": "#f3f3f3",
        "red-primary": "#DC2626",
        "red-dark": "#991B1B",
        "red-light": "#EF4444",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #2c0a0a",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};

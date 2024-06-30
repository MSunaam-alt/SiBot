/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F3F3F3",
        secondary: "#312F2F",
        red: "#FE5E54",
        bisque: "#FFE1C5",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      // => @media (min-width: 640px) { ... }

      md: "730px",
      // => @media (min-width: 768px) { ... }

      lg: "996px",
      // => @media (min-width: 1024px) { ... }

      xl: "1240px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "570px",
      // => @media (min-width: 540px) { ... }

      sm: "673px",
      // => @media (min-width: 640px) { ... }

      smd: "700px",
      // => @media (min-width: 768px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lmd: "942px",
      // => @media (min-width: 768px) { ... }

      lg: "1200px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};

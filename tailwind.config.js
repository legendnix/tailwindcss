/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#22D3EE",
        secondary: "#64748b",
        dark: "#0F172A",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

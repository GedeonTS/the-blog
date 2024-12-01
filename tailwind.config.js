/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f5fa",
          100: "#efeaf4",
          200: "#dad1e6",
          300: "#b9a9d0",
          400: "#927ab6",
          500: "#76599e",
          600: "#614683",
          700: "#50396b",
          800: "#44325a",
          900: "#3c2e4c",
          950: "#100c14",
        },
      },
    },
  },
  plugins: [],
};

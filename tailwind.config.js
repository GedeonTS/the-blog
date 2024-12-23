/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   50: "#f8f5fa",
        //   100: "#efeaf4",
        //   200: "#dad1e6",
        //   300: "#b9a9d0",
        //   400: "#927ab6",
        //   500: "#76599e",
        //   600: "#614683",
        //   700: "#50396b",
        //   800: "#44325a",
        //   900: "#3c2e4c",
        //   950: "#100c14",
        // },
        // primary: {
        //   50: "#f6f6f6",
        //   100: "#e7e7e7",
        //   200: "#d1d1d1",
        //   300: "#b0b0b0",
        //   400: "#888888",
        //   500: "#6d6d6d",
        //   600: "#5d5d5d",
        //   700: "#4f4f4f",
        //   800: "#454545",
        //   900: "#3d3d3d",
        //   950: "#000000",
        // },
        primary: {
          100: "#f2f6fc",
          100: "#d9e4f7",
          200: "#b0c9ef",
          300: "#84aee7",
          400: "#5a92df",
          500: "#306ed7",
          600: "#2558b0",
          700: "#1c4389",
          800: "#142d62",
          950: "#0d1a3c",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

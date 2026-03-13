/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F16B01",
        "primary-hover": "#D95E01",
        dark: "#101103",
        "dark-light": "#2A2A2D",
        secondary: "#344966",
        surface: "#F7F7F7",
        border: "#E5E5E5",
        success: "#16A34A",
        error: "#DC2626",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        display: ['"Poppins"', "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

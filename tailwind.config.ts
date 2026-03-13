import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F16B01",
          hover: "#D95E01",
          foreground: "#FFFFFF",
        },
        dark: {
          DEFAULT: "#101103",
          light: "#2A2A2D",
        },
        secondary: {
          DEFAULT: "#344966",
          foreground: "#FFFFFF",
        },
        surface: "#F7F7F7",
        border: "#E5E5E5",
        success: "#16A34A",
        error: "#DC2626",
        background: "#FFFFFF",
        foreground: "#101103",
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

export default config;

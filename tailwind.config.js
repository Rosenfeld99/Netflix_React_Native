/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Apps/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // movie colors
        primary: "#000000", // Black
        primary_content: "#FFFFFF", // White
        secondary: "#FF0000", // Red
        secondary_content: "#FFFFFF", // White
        accent: "#E50914", // Netflix Red
        accent_content: "#FFFFFF", // White

        // shop colors
        shop_primary: "#ffffff", // Black
        shop_primary_content: "#3C2F2F", // Black
        shop_secondary: "#E50914", // Black
        shop_secondary_content: "#6A6A6A", // Black
        shop_accent: "#d2d2d2", // Black
        shop_accent_content: "#ffffff", // Black

        // global colors
        neutral: "#808080", // Grey
        neutral_content: "#FFFFFF", // White
        info: "#0072CE", // Blue
        info_content: "#FFFFFF", // White
        success: "#4CAF50", // Green
        success_content: "#FFFFFF", // White
        warning: "#FFC107", // Yellow
        warning_content: "#FFFFFF", // White
        error: "#FF0000", // Red
        error_content: "#FFFFFF", // White
        sckeleton: "#242424", // sckeleton
      },
    },
  },
  plugins: [],
};

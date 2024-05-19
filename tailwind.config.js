/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Apps/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Black
        primary_content: "#FFFFFF", // White
        secondary: "#FF0000", // Red
        secondary_content: "#FFFFFF", // White
        accent: "#E50914", // Netflix Red
        accent_content: "#FFFFFF", // White
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

/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
      },
      colors: {
        cream: { 50: "#F7F3E8", 100: "#F0E9D6" },
        mustard: {
          50: "#FBF6E8",
          100: "#F7EAC4",
          200: "#F3D99B",
          300: "#EBC87A",
          400: "#E0A83A",
          600: "#B8892F",
          700: "#9A6F26",
        },
        basil: { 500: "#4A7C59" },
      },
      animation: {
        "float-pizza": "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
};

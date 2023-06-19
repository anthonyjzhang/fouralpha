const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Display", ...defaultTheme.fontFamily.sans],
        helvetica: ["Helvetica"],
        Sf_pro: ["SF Pro"],
      },
      colors: {
        dark: "#393939",
        darkGray: "#425466",
        lightBlue: "#1DA1F2",
        lightGray: "#F6F9FC",
        darkPurple: "#8711C1",
      },
      backgroundImage: {
        purpleGr:
          "radial-gradient(103.61% 103.61% at 27.84% -3.61%, #9747FF 0%, #1DA1F2 100%)",
        purpleBlueLinear:
          "linear-gradient(270deg, #5E49D4 21%, #8711C1 48.15%, #1DA1F2 71%)",
      },
      boxShadow: {
        btn: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};

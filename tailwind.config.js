/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        greenCostum: "#B9FF66",
        darkCostum: "#191A23",
        greyCostum: "#F3F3F3",
        greyBg: "#DADADA",
      },
      boxShadow: {
        boxService: "0px 5px #000000",
      },
      keyframes: {
        slideToRight: {
          "0%, 100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(500%)" },
        },
        slideLoop: {
          "0%": { transform: "translateX(-52%)" },
          "100%": { transform: "translateX(-1%)" },
        },
      },
      animation: {
        slideToRight: "slideToRight 2s linear infinite",
        slideLoop: "slideLoop 10s linear infinite",
      },
    },
  },
  plugins: [],
};

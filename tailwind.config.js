/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyfont: ["Inter", "sans-serif"],
        titleFont: ["Manrope", "sans-serif"],
      },
      colors: {
        bodyColor: "#0f1218",
        textColor: "rgba(230, 233, 238, 0.9)",
        designColor: "#2F80ED",
        surfaceColor: "#111623",
        titleRoundBg:
          "linear-gradient(135deg,rgba(47,128,237,.08) 0%,rgba(47,128,237,.02) 100%)",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "reverse-spin": "reverse-spin 15s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
      boxShadow: {
        greenShadow: "0 28px 110px -60px rgba(47,128,237,0.55)",
        testShwdow: "0 20px 60px -35px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

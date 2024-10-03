/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "425px" },
      // => @media (max-width: 420px) { ... }

      "min-2xl": { min: "1535px" },
      // => @media (min-width: 1535px) { ... }

      "min-xl": { min: "1279px" },
      // => @media (min-width: 1279px) { ... }

      "min-lg": { min: "1024px" },
      // => @media (min-width: 1023px) { ... }

      "min-md": { min: "768px" },
      // => @media (min-width: 767px) { ... }

      "min-sm": { min: "639px" },
      // => @media (min-width: 639px) { ... }

      "min-xs": { min: "425px" },
      // => @media (min-width: 420px) { ... }
    },
    extend: {
      backgroundImage: {
        "top-gradient":
          "linear-gradient(114deg, rgba(17,24,39,1) 16%, rgba(7,67,71,1) 28%, rgba(12,46,97,1) 42%, rgba(0,35,88,1) 63%, rgba(17,24,39,1) 90%)",
        "table-gradient":
          "linear-gradient(114deg, rgba(17,24,39,1) 16%, rgba(35,36,78,1) 28%, rgba(35,36,78,1) 42%, rgba(2,16,38,1) 63%, rgba(17,24,39,1) 90%);",
        "testimonial-gradient":
          "linear-gradient(112deg, rgba(18,26,45,1) 18%, rgba(35,36,78,1) 28%, rgba(35,36,78,1) 30%, rgba(18,26,45,1) 42%, rgba(18,26,45,1) 97%);",
        "join-us": "url('../public/assets/cta-illustration.svg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FFFFFF",
        secondry: "#929EB1",
        btnColor: "#6366F1",
        btnHoverColor: "#5052CD",
        btnColorSecondry: "#334155",
        btnSecondryHoverColor: "#3E4F68",
        arrowColor: "#7dd3fc",
        line: "#3E4F68",
        boxBg: "#182334",
        tableBgPrimary: "#182334",
        tableBgSecondry: "#171B2C",
        detailsBg: "#121A2D",
      },
      backgroundColor: {
        headerBg: "#111827",
      },
    },
  },
  plugins: [],
};

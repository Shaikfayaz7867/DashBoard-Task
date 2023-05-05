/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        background: "#f5f5f5",
        "light-grey": "#b0b0b0",
        black: "#000",
        "secondary-text": "#858585",
        cornflowerblue: "#6972c3",
        icon: "#999",
        dimgray: "#666",
        lightgreen: "#9bdd7c",
        "field-color-darker": "#eaeaea",
        lavender: "#dee0ef",
        mistyrose: "#efdada",
        honeydew: "#ddefe0",
        oldlace: "#f4ecdd",
        link: "#346bd4",
      },
      fontFamily: {
        lato: "Lato",
        montserrat: "Montserrat",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        xl: "20px",
        "11xl": "30px",
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      xs: "12px",
      lg: "18px",
      "17xl": "36px",
      base: "16px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

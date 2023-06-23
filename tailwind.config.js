/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        nav_width: "103px",
        container: "750px",
      },
      height: {
        nav_height: "103px",
      },
      borderRadius: {
        navRadius: "20px",
      },

      colors: {
        background: "#141625",
        inputBg: "#1e2138",
        primary: "#7C5DFA",
        secondary: "#1E2139",
        light: "#DFE3FA",
        status_green: "#33D69F",
        status_green_light: "#1F2B3F",
        logoLight: "#9277FF",
        bTop: "#494E6E",
        dropdownBg: "#252945",
        brightRed: "#EC5757",
      },
    },
  },
};

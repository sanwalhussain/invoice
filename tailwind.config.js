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
        container: "730px",
        formWidth: "719px",
      },
      height: {
        nav_height: "103px",
      },
      borderRadius: {
        navRadius: "20px",
      },
      colors: {
        background: "#141625",
        overlayColor: "#141625",
        inputBg: "#1E2139",
        primary: "#7C5DFA",
        secondary: "#1E2139",
        light: "#DFE3FA",
        status_green: "#33D69F",
        status_green_light: "#1F2B3F",
        logoLight: "#9277FF",
        bTop: "#494E6E",
        dropdownBg: "#252945",
        brightRed: "#EC5757",
        hashtagColor: "#888EB0",
        vBlack: "#0C0E16",
        btnHoverPrimary: "#7E88C3",
        btnHoverRed: "#FF9797",
        btnHoverPurple: "#9277FF",
        customBorderColor: "#252945",
      },
      dropShadow: {
        new: "0px 10px 10px -10px rgba(72,84,159,0.104)",
      },
    },
  },
};

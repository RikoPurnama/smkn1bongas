/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "24",
    },
    extend: {
      colors: {
        primary: "#1363DF",
        dark: "#051927",
        semiDark: "#052133",
        light: "#F9FBFF",
        grey: "#BFC8CA",
        transparentDark: "rgba(5, 26, 40, .96)",
        nav: "rgba(5, 26, 40, .79)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        card: "0 0 20px 0 rgba(5, 26, 40, 1)",
        inner: "inset 0 -1px 1px 0 rgba(5, 26, 40, .3)",
      },
      screen: {
        '2xl': "1320px",
      },
      gridRow: {
        'v-stretch': 'span 2',
        'res-v-stretch': 'span 1 span 1',
      },
      gridColumn: {
        'h-stretch': 'span 2',
        'res-h-stretch': 'span 1 span 1',
      },
    },
  },
  plugins: [],
};

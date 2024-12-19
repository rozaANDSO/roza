/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c1a1a",
        secondary: "#ba2929",
        tertiary: "#E5E7EB",
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      sm: { max: "800px" },
    },
  },
  plugins: [],
};

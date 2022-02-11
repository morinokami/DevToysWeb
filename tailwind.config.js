module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "768px" },
        xs: { max: "640px" },
      },
      colors: {
        dark: {
          20: "#383838",
          30: "#2c2c2c",
          35: "#282828",
          40: "#242424",
          50: "#171717",
        },
        light: {
          10: "#ffffff",
          20: "#fafafa",
          30: "#f4f4f4",
          40: "#e8e8e8",
        },
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

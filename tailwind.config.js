module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          2: "#383838",
          3: "#2c2c2c",
          4: "#242424",
          5: "#171717",
        },
      },
    },
  },
  plugins: [],
};

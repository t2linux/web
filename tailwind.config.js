module.exports = {
  purge: [
    './src/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        hero: "66px",
        section: "40px",
      },
      lineHeight: {
        hero: "85px",
        section: "50px",
      },
      backgroundColor: {
        neutral: "#7663E8",
        "neutral-600": "#7763e8c2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

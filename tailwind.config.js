module.exports = {
  purge: {
    content: [
    "./desktop/**/*.html",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
    "./templates/**/*.tmpl",
    "./artifact-output/**/*.{html, tmpl}",
  ]},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ll-blue": "#00173C",
        "ll-red": "#E52222",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

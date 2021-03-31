module.exports = {
  purge: [
    "./desktop/**/*.html",
    "./desktop/**/*.jxs",
    "./templates/**/*.tmpl",
    "./artifact-output/**/*.{html, tmpl}",
  ],
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

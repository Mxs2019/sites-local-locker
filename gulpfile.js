var gulp = require("gulp");
var postcss = require("gulp-postcss");

const style = () => {
  return gulp
    .src("styles/*.css")
    .pipe(
      postcss([
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
      ])
    )
    .pipe(gulp.dest(".artifact-output/desktop"));
};
gulp.task("style", style);

gulp.task("watch", function () {
  return gulp.watch(
    [
      "styles/**/*.css",
      "templates/**/*.tmpl",
      "src/**/*.tsx",
      "tailwind.config.js",
    ],
    gulp.series(style)
  );
});

gulp.task("default", gulp.series(style));

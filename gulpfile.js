var gulp = require("gulp");
var sass = require("gulp-sass");

// Generate .css file
gulp.task("styles", function () {
  gulp
    .src("styles/scss/**/*.scss")
    .pipe(sass().on("error"), sasss.logError)
    .pipe(gulp.dest(".styles/css/"));
});

// Watch task
gulp.task("watch", function () {
  gulp
    .watch("scss/**/*.scss", ["styles"]);
});

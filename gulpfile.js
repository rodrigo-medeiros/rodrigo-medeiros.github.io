var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

// Generate .css file
gulp.task("styles", function () {
  gulp
    .src("./styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/"))
    .pipe(browserSync.stream());
});

// Browser Sync setup
gulp.task("browser-sync", function () {
  browserSync.init({
    server: "./",
    logFileChanges: false
  });
});

// Watch task
gulp.task("serve", ["styles", "browser-sync"], function () {

  gulp.watch("styles/**/*.scss", ["styles"]);
  gulp.watch("*.html").on('change', browserSync.reload);
});

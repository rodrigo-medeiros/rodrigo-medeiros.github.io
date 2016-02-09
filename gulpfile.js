var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var browserSync = require("browser-sync").create();

// Generate .css file
gulp.task("styles", function () {
  gulp
    .src("./styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/"))
    .pipe(browserSync.stream());
});

// Minify javascript files
gulp.task("compress", function () {
  gulp
    .src("js/*.js")
    .pipe(uglify())
    .pipe(rename({
      basename: "bundle"
    }))
    .pipe(gulp.dest("./dist/js/"))
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
gulp.task("serve", ["styles", "compress", "browser-sync"], function () {
  gulp.watch("styles/**/*.scss", ["styles"]);
  gulp.watch("js/**/*.js", ["compress"]);
  gulp.watch("*.html").on("change", browserSync.reload);
});

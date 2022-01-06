const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browserSync = require("browser-sync");
const rename = require("gulp-rename");

// Scss Task
function scssTask() {
  return src("assets/css/scss/**/*.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(rename("main.min.css"))
    .pipe(dest("assets/css", { sourcemaps: "." }));
}

// Javascript Task
function jsTask() {
  return src("assets/js/main.js", { sourcemaps: true })
    .pipe(terser())
    .pipe(rename("main.min.js"))
    .pipe(dest("assets/js", { sourcemaps: "." }));
}

function browserSyncServe(cb) {
  browserSync.init({
    injectChanges: true,
    server: './',
    port: 8888,
    notify: false,
  });
  cb();
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

function watchTask() {
  watch("*.html", browserSyncReload);
  watch(
    ["assets/css/scss/**/*.scss", "assets/js/main.js"],
    series(scssTask, jsTask, browserSyncReload)
  );
}

exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);

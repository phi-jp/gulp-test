/*
 * gulpfile
 */

var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("default", function() {
  var files = ['./scripts/a.js', './scripts/b.js'];
  gulp.src(files)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./build'))
    ;
});

/*
 * gulpfile
 */


var gulp = require('gulp');
var header = require('gulp-header');

var pkg = require('./package.json');
var banner = [
  "/* ",
  " * <%= pkg.name %> <%= pkg.version %>",
  " * <%= pkg.description %>",
  " * <%= pkg.license %> Licensed",
  " * ",
  " * Copyright (C) 2015 <%= pkg.author %>, <%= pkg.homepage %>",
  " */",
  "",
].join('\n');

gulp.task('default', ['build']);

gulp.task('build', function() {
  gulp.src('src/*.js')
    .pipe(header(banner, {
      pkg: pkg,
    }))
    .pipe(gulp.dest('./dist'))
    ;
});

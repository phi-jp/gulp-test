/*
 * gulpfile
 */


var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
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
  "",
].join('\n');

gulp.task('default', ['build']);

gulp.task('build', function() {
  gulp.src('./src/**/*.js')
    .pipe(concat('lib.js'))
    .pipe(header(banner, {
      pkg: pkg,
    }))
    .pipe(gulp.dest('./build'))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(header(banner, {
      pkg: pkg,
    }))
    .pipe(gulp.dest('./build'))
    ;
});

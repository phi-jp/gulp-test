/*
 * gulpfile
 */


var gulp = require("gulp");
var rename = require("gulp-coffee");
var jade = require("gulp-jade");
var uglify = require("gulp-uglify");
var coffee = require("gulp-coffee");
var less = require("gulp-less");
var webserver = require("gulp-webserver");

gulp.task("default", ["server", "watch"]);
gulp.task("build", ["script", "style", "html"]);

gulp.task("script", function() {
  gulp.src('./coffee/**/*.coffee')
    .pipe(coffee())
    .pipe(uglify())
    .pipe(gulp.dest('./build'))
    ;
});

gulp.task("style", function() {
  gulp.src('./less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./build'))
    ;
});

gulp.task("html", function() {
  gulp.src('./jade/**/*.jade')
    .pipe(jade({
      pretty: true,
      locals: {
        title: "grunt test"
      }
    }))
    .pipe(gulp.dest('./build'))
    ;
});

gulp.task("watch", function() {
  var targets = [
    './coffee/**/*.coffee',
    './style/**/*.style',
    './jade/**/*.jade',
  ];
  gulp.watch(targets, ['build']);
});

gulp.task("server", function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: true,
    }));
});


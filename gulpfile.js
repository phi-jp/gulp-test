/*
 * gulpfile
 */

var gulp = require("gulp");
var webserver = require("gulp-webserver");

gulp.task("default", function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true, // ライブリロードを有効に
      open: true,       // タスク実行と同時にページを開く
    }))
    ;
});

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here
  console.log('default task run!');
});

gulp.task('scss', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.'));
});

gulp.task('scss:watch', function () {
  gulp.watch('./scss/**/*.scss', ['scss']);
});

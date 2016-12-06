var gulp 	= require('gulp');

gulp.task('dist-images-copy', function() {
  return gulp.src([
  		'./_dev/lib/imgs/**/*.*',
  		'./_dev/lib/fonts/**/*.*'
  	])
    .pipe(gulp.dest('./_dist/jekyll_dist/lib/imgs'));
});

gulp.task('dist-fonts-copy', function() {
  return gulp.src([
  		'./_dev/lib/imgs/**/*.*',
  		'./_dev/lib/fonts/**/*.*'
  	])
    .pipe(gulp.dest('./_dist/jekyll_dist/lib/fonts'));
});


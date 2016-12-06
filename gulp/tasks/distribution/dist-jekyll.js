var gulp 	= require('gulp');
var shell   = require('gulp-shell');
var clean   = require('gulp-clean');
var runSequence = require('run-sequence');

gulp.task('dist-jekyll', function() {
  runSequence('dist-jekyll-clean',
              'dist-jekyll-copy',
              'dist-jekyll-build' 
    );
});


gulp.task('dist-jekyll-clean', function () {
  return gulp.src('./_dist/jekyll_dist/', {read: true})
    .pipe(clean());
});

gulp.task('dist-jekyll-copy', function() {
  return gulp.src([
  		'!./_dev/_config_dev.yml',
  		'!./_dev/_assets/**/*.*',
  		'!./_dev/_site/**/*.*',
      '!./_dev/_lib/**/*.*',
  		'./_dev/**/*.*',
  	])
    .pipe(gulp.dest('./_dist/jekyll_dist'));
});


gulp.task('dist-jekyll-build',shell.task(['jekyll build --config _dist/jekyll_dist/_config.yml --source ./_dist/jekyll_dist/ --destination ./_dist/jekyll_dist/_site']));
var gulp 	= require('gulp');
var shell   = require('gulp-shell');
var clean   = require('gulp-clean');
var runSequence = require('run-sequence');
var config = require('../../config').jekyll;

gulp.task('dist-jekyll', function() {
  runSequence('dist-jekyll-clean',
              'dist-jekyll-copy',
              'dist-jekyll-build' 
    );
});


gulp.task('dist-jekyll-clean', function () {
  return gulp.src(config.jekyllpathDist, {read: true})
    .pipe(clean());
});

gulp.task('dist-jekyll-copy', function() {
  return gulp.src(
  		config.jekyllSrcDist
  	)
    .pipe(gulp.dest(config.jekyllpathDist));
});


gulp.task('dist-jekyll-build',shell.task(config.jekyllBuildDist));
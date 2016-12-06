var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dist', function() {
  runSequence(
              'dist-jekyll-clean',
              'dist-scripts',
              'dist-images-copy',
              'dist-sass',
              'dist-fonts-copy',
              'dist-jekyll-copy',
              'dist-jekyll-build'     
    );
});
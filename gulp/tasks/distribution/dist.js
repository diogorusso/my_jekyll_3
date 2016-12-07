var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dist-gh-pages', function() {
  runSequence(
              'dist-jekyll-clean',
              'dist-yaml-gh-pages',
              'dist-scripts',
              'dist-images-copy',
              'dist-sass',
              'dist-fonts-copy',
              'dist-jekyll-copy',
              'dist-jekyll-build'     
    );
});


gulp.task('dist-html', function() {
  runSequence(
              'dist-jekyll-clean',
              'dist-yaml-html',
              'dist-scripts',
              'dist-images-copy',
              'dist-sass',
              'dist-fonts-copy',
              'dist-jekyll-copy',
              'dist-jekyll-build'     
    );
});
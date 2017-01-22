var gulp = require('gulp');
var runSequence = require('run-sequence');



gulp.task('deploy', function() {
  runSequence(
              'dist-jekyll-clean',
              'dist-yaml-gh-pages',
              'dist-scripts',
              'dist-images-copy',
              'dist-sass',
              'dist-fonts-copy',
              'dist-jekyll-copy',
              'dist-jekyll-build',
              'gh-pages',
              'dist-jekyll-clean',
              'dist-yaml-html',
              'dist-scripts',
              'dist-images-copy',
              'dist-sass',
              'dist-fonts-copy',
              'dist-jekyll-copy',
              'dist-jekyll-build',
              'html-deploy'
    );
});




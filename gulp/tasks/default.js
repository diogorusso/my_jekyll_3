var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
  runSequence(
              'yaml',
              'scripts',
              'sass',
              'jekyll',
              'watch'            
    );
});
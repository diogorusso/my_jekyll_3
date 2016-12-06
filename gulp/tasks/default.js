var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
  runSequence('scripts',
              'sass',
              'jekyll',
              'watch'            
    );
});
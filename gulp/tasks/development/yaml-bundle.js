var gulp = require('gulp');
var yamlMerge = require('gulp-yaml-merge');

gulp.task('yaml', function() {
  return gulp.src('./_dev/*.yml')
    .pipe(yamlMerge('bundle.yml'))
    .pipe(gulp.dest('./dist/'));
});
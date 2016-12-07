var gulp = require('gulp');
var yamlMerge = require('gulp-yaml-merge');

gulp.task('yaml', function() {
  return gulp.src(['./_config/_dev.yml','./_config/build/*.yml'])
    .pipe(yamlMerge('_config.yml'))
    .pipe(gulp.dest('./_dev/'));
});
var gulp = require('gulp');
var yamlMerge = require('gulp-yaml-merge');

gulp.task('dist-yaml-gh-pages', function() {
  return gulp.src(['./_config/_dist-gh-pages.yml','./_config/build/*.yml'])
    .pipe(yamlMerge('_config.yml'))
    .pipe(gulp.dest('./_dev/'));
});


gulp.task('dist-yaml-html', function() {
  return gulp.src(['./_config/_dist-html.yml','./_config/build/*.yml'])
    .pipe(yamlMerge('_config.yml'))
    .pipe(gulp.dest('./_dev/'));
});
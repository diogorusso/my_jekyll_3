var gulp    = require('gulp');
var htmlmin = require('gulp-htmlmin');


gulp.task('html-minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

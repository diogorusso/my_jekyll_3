var gulp   = require('gulp');
var sketch = require('gulp-sketch');

gulp.task('sketch', function(){
  return gulp.src('./_design/Layout_Foundation_5.sketch')
    .pipe(sketch({
      export: 'slices',
    }))
    .pipe(gulp.dest('./_dev/_assets/sketch'));
});
var gulp 	= require('gulp');
var config = require('../../config').images;

gulp.task('dist-images-copy', function() {
  return gulp.src(config.imgDistSrc)
    .pipe(gulp.dest(config.imgDistDest));
});

gulp.task('dist-fonts-copy', function() {
  return gulp.src(config.imgDistSrc)
    .pipe(gulp.dest(config.fontsDistDest));
});


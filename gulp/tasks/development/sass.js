var gulp = require('gulp');
var sass = require('gulp-sass');
var clean   = require('gulp-clean');
var rename = require("gulp-rename");
var runSequence = require('run-sequence');

gulp.task('sass', function() {
  runSequence('sass-clean',
              'sass-build' 
    );
});


gulp.task('sass-clean', function () {
  return gulp.src('./_dev/lib/css/main.css', {read: true})
    .pipe(clean());
});



gulp.task('sass-build', function() {
    gulp.src([
    		
    		'./_dev/_assets/_sass/_themes/jellyfish-theme.scss'
    	])
        .pipe(sass({outputStyle: 'uncompressed'}).on('error', sass.logError))
        .pipe(rename("main.css"))
        .pipe(gulp.dest('./_dev/lib/css/'))
});

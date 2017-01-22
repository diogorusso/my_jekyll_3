var gulp = require('gulp');
var sass = require('gulp-sass');
var clean   = require('gulp-clean');
var rename = require("gulp-rename");
var runSequence = require('run-sequence');
var config = require('../../config').sass;

gulp.task('sass', function() {
  runSequence('sass-clean',
              'sass-build' 
    );
});

gulp.task('sass-clean', function () {
  return gulp.src(config.cssClean, {read: true})
    .pipe(clean());
});

gulp.task('sass-build', function() {
    gulp.src(config.sassSrc)
        .pipe(sass({outputStyle: 'uncompressed'}).on('error', sass.logError))
        .pipe(rename(config.cssDist))
        .pipe(gulp.dest(config.pathDist))
});

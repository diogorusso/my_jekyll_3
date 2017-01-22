var gulp = require('gulp');
var sass = require('gulp-sass');
var clean   = require('gulp-clean');
var rename = require("gulp-rename");
var runSequence = require('run-sequence');
var config = require('../../config').sass;

gulp.task('dist-sass', function() {
  runSequence('sass-clean',
              'dist-sass-build' 
    );
});

gulp.task('dist-sass-build', function() {
     gulp.src(config.sassSrc)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename(config.cssDist))
        .pipe(gulp.dest(config.pathDist))
});

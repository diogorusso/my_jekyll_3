var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var runSequence = require('run-sequence');

gulp.task('dist-sass', function() {
  runSequence('sass-clean',
              'dist-sass-build' 
    );
});

gulp.task('dist-sass-build', function() {
    gulp.src([
    		
    		'./_dev/_assets/_sass/_themes/jellyfish-theme.scss'
    	])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename("main.css"))
        .pipe(gulp.dest('./_dist/jekyll_dist/lib/css/'))
});

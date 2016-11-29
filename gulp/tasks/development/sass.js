var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");

gulp.task('sass', function() {
    gulp.src([
    		
    		'./_dev/_assets/_sass/_themes/jellyfish-theme.scss'
    	])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename("main.css"))
        .pipe(gulp.dest('./_dev/lib/css/'))
});

var gulp        = require('gulp');
var browserSync = require('browser-sync');


gulp.task('dist-browsersync', function () {
    browserSync(
        { 
            server: {
                baseDir: './_dist/jekyll_dist/_site/'
            },
            port: 1212,
        }
    );
});


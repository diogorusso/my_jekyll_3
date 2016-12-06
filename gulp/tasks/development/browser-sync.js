var gulp        = require('gulp');
var browserSync = require('browser-sync');


gulp.task('browsersync', function () {
    browserSync(
        { server: {
             baseDir: './_dev/_site/',
            },
            port: 1818,
        }
    );


    // Reloads page when some of the already built files changed:
    gulp.watch('./_dev/_site/**/*.*').on('change', browserSync.reload);
    
});
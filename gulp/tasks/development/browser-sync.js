var gulp        = require('gulp');
var browserSync = require('browser-sync');

// Task for serving blog with Browsersync
gulp.task('browsersync', function () {
    browserSync.init({server: {
    							baseDir: './_dev/_site/'
    						}
    					});
    // Reloads page when some of the already built files changed:
    gulp.watch('./_dev/_site/**/*.*').on('change', browserSync.reload);
});
var gulp        = require('gulp');
var lodash        = require('lodash');
var shell        = require('gulp-shell');
var browsersync = require('browser-sync');

//works with JEKYLL watch - no realod when change config files - need disable watch.js jekyll rebuild
//gulp.task('jekyll',shell.task(['jekyll build --watch --config _config.yml,_config_dev.yml']));

gulp.task('jekyll',shell.task(['jekyll build --source ./_dev --destination ./_dev/_site']));

gulp.task('jekyll-rebuild', ['jekyll'], function() {
  browsersync.reload();
});
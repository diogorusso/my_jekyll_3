var gulp 	= require('gulp');
var shell   = require('gulp-shell');
var clean   = require('gulp-clean');


gulp.task("jekyll-dist", ['jekyll-dist-clean', 'jekyll-dist-copy', 'jekyll-dist-build']);


gulp.task('jekyll-dist-clean', function () {
  return gulp.src('./_dist/jekyll_dist/', {read: true})
    .pipe(clean());
});

gulp.task('jekyll-dist-copy', function() {
  return gulp.src([
  		'!./_dev/_config_dev.yml',
  		'!./_dev/_assets/**/*.*',
  		'!./_dev/_site/**/*.*',
  		'./_dev/.gitignore',
  		'./_dev/**/*.*',
  	])
    .pipe(gulp.dest('./_dist/jekyll_dist'));
});


gulp.task('jekyll-dist-build',shell.task(['jekyll build --config _dist/jekyll_dist/_config.yml --source ./_dist/jekyll_dist/ --destination ./_dist/jekyll_dist/_site']));
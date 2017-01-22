var gulp 	= require('gulp');
var concat = require('gulp-concat');
var clean   = require('gulp-clean');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var config = require('../../config').script;

gulp.task('dist-scripts', function() {
  runSequence('dist-scripts-clean',
              'dist-scripts-head',
              'dist-scripts-vendor',
              'dist-scripts-custom' 
    );
});

gulp.task('dist-scripts-clean', function () {
  return gulp.src(config.scriptClean, {read: true})
    .pipe(clean());
});

// ######### SCRIPTS HEAD ###############

gulp.task('dist-scripts-head', function() {
    return gulp.src(config.headSrc)
    .pipe(concat(config.scriptHeadDist))
    .pipe(uglify())
    .pipe(gulp.dest(config.pathDist));

});


// ######### SCRIPTS FOOTER ###############
 
gulp.task('dist-scripts-vendor', function() {
  	return gulp.src(config.vendorSrc)
    .pipe(concat(config.scriptVendorDist))
    .pipe(uglify())
    .pipe(gulp.dest(config.pathDist));

});


gulp.task('dist-scripts-custom', function() {
  	return gulp.src(config.scriptSrc)
    .pipe(concat(config.scriptDist))
    .pipe(uglify())
    .pipe(gulp.dest(config.pathDist));

});




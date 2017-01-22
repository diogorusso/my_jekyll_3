var gulp 	= require('gulp');
var concat = require('gulp-concat');
var clean   = require('gulp-clean');
var runSequence = require('run-sequence');
var config = require('../../config').script;

gulp.task('scripts', function() {
  runSequence('scripts-clean',
              'scripts-head',
              'scripts-vendor',
              'scripts-custom' 
    );
});

gulp.task('scripts-clean', function () {
  return gulp.src(config.scriptClean, {read: true})
    .pipe(clean());
});

// ######### SCRIPTS HEAD ###############

gulp.task('scripts-head', function() {
    return gulp.src(config.headSrc)
    .pipe(concat(config.scriptHeadDist))
    .pipe(gulp.dest(config.pathDist));

});


// ######### SCRIPTS FOOTER ###############
 
gulp.task('scripts-vendor', function() {
  	return gulp.src(config.vendorSrc)
    .pipe(concat(config.scriptVendorDist))
    .pipe(gulp.dest(config.pathDist));

});


gulp.task('scripts-custom', function() {
  	return gulp.src(config.scriptSrc)
    .pipe(concat(config.scriptDist))
    .pipe(gulp.dest(config.pathDist));

});





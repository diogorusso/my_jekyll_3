var gulp 	= require('gulp');
var concat = require('gulp-concat');
var clean   = require('gulp-clean');
var runSequence = require('run-sequence');

gulp.task('scripts', function() {
  runSequence('scripts-clean',
              'scripts-head',
              'scripts-footer' 
    );
});

gulp.task('scripts-clean', function () {
  return gulp.src('./_dev/lib/js/', {read: true})
    .pipe(clean());
});

// ######### SCRIPTS HEAD ###############

gulp.task('scripts-head', function() {
    return gulp.src([

        // vendors files 
        
        './_dev/_assets/vendors/picturefill-master/dist/picturefill.js'
        ])
    .pipe(concat('head.js'))
    .pipe(gulp.dest('./_dev/lib/js/'));

});


// ######### SCRIPTS FOOTER ###############
 
gulp.task('scripts-footer', function() {
  	return gulp.src([
        
        // bower components
  			
        './_dev/_assets/bower_components/foundation/js/vendor/jquery.js' ,
  			'./_dev/_assets/bower_components/foundation/js/vendor/fastclick.min.js' ,
  			'./_dev/_assets/bower_components/foundation/js/foundation.min.js' ,
        './_dev/_assets/bower_components/isotope/dist/isotope.pkgd.min.js',
        './_dev/_assets/bower_components/imagesloaded/imagesloaded.pkgd.min.js',
  			'./_dev/_assets/bower_components/jquery.easing/js/jquery.easing.min.js' ,
        './_dev/_assets/bower_components/fullpage.js/vendors/jquery.slimscroll.min.js' ,
        './_dev/_assets/bower_components/fullpage.js/dist/jquery.fullpage.min.js' ,
        
        //vendors files
        
        './_dev/_assets/vendors/FitVids.js-master/jquery.fitvids.js' ,
        './_dev/_assets/vendors/swipebox-master/src/js/jquery.swipebox.min.js',
        
        //my scripts
        
        './_dev/_assets/_scripts/**/*.js'
  			
        ])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./_dev/lib/js/'));

});





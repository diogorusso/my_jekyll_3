var gulp 	= require('gulp');
var runSequence = require('run-sequence');
var imageOp = require('gulp-image-optimization');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");
var clean = require('gulp-clean');
var config = require('../../config').images;



/*var imgSrc = './_dev/_assets/_img/';
var imgSrcResp = './_dev/_assets/_img/responsive/' ;
var imgDest = './_dev/lib/img/';
var imgBreakpoints = {
  sizes: [480,791,1042,1482,1920],
};*/






gulp.task('imgs', function() {
  runSequence(
              'imgs-clean',
              'sketch',
              'imgs-copy',
              'imgs-resp'
        );
});

gulp.task('imgs-clean', function () {
  return gulp.src([
    config.imgSrc,
    config.imgDest], 
    {read: true})
    .pipe(clean());
});

gulp.task('imgs-copy', function() {
  return gulp.src([
  		config.imgSrc+'*.*',
      config.imgSrcResp+'*.*',
  	])
    
    .pipe(gulp.dest(config.imgDest));
});



gulp.task("imgs-resp", function () {

 var imgSrcPaths ={
    src: config.imgSrcResp+'*.*',
    dest: config.imgDest
  };

  function GenImages(value){
    gulp.src(imgSrcPaths.src)
    .pipe(imageResize({ 
        width : value,
        quality: 1, 
      }))
    .pipe(rename(function (path) { 
      //path.basename += '_'+value+'px';
      path.dirname += "/"+ value;
    }))
    .pipe(imageOp({
          optimizationLevel: 10,
          progressive: true,
          interlaced: true
    }))
    .pipe(gulp.dest(imgSrcPaths.dest));
  }

  for ( var i = 0; i < config.imgBreakpoints.sizes.length; i++) {
    var objs = config.imgBreakpoints.sizes[i];
    console.log(imgSrcPaths.src+ '------' + objs);

    GenImages(objs)
    }
});




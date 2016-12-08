var gulp 	= require('gulp');
var runSequence = require('run-sequence');
var imageOp = require('gulp-image-optimization');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");
var clean = require('gulp-clean');
var imgSrc = './_dev/_assets/_img/';
var imgSrcResp = './_dev/_assets/_img/responsive/' ;
var imgDest = './_dev/lib/img/';
var imgBreakpoints = {
  sizes: [480,791,1042,1482,1920],
};


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
    imgSrc,
    imgDest], 
    {read: true})
    .pipe(clean());
});

gulp.task('imgs-copy', function() {
  return gulp.src([
  		imgSrc+'*.*',
      imgSrcResp+'*.*',
  	])
    
    .pipe(gulp.dest(imgDest));
});



gulp.task("imgs-resp", function () {

 var imgSrcPaths ={
    src: imgSrcResp+'*.*',
    dest: imgDest
  };

  function GenImages(value){
    gulp.src(imgSrcPaths.src)
    .pipe(imageResize({ width : value }))
    .pipe(rename(function (path) { 
      //path.basename += '_'+value+'px';
      path.dirname += "/"+ value;
    }))
    .pipe(imageOp({
          optimizationLevel: 7,
          progressive: true,
          interlaced: true
    }))
    .pipe(gulp.dest(imgSrcPaths.dest));
  }

  for ( var i = 0; i < imgBreakpoints.sizes.length; i++) {
    var objs = imgBreakpoints.sizes[i];
    console.log(imgSrcPaths.src+ '------' + objs);

    GenImages(objs)
    }
});




var gulp 	= require('gulp');
var runSequence = require('run-sequence');
var imageOp = require('gulp-image-optimization');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");
var clean = require('gulp-clean');

gulp.task('site-imgs', function() {
  runSequence(
              'imgs-clean',
              'sketch',
              'imgs-base-copy',
              'imgs-components-copy',
              'imgs-base-responsive',
              'imgs-components-responsive'
        );
});

gulp.task('site-imgs-clean', function () {
  return gulp.src([
    './_dev/_assets/sketch',
    './_dev/lib/imgs/sketch/'], 
    {read: true})
    .pipe(clean());
});

gulp.task('imgs-base-copy', function() {
  return gulp.src([
  		'./_dev/_assets/sketch/base/*.*',
      './_dev/_assets/sketch/base/responsive/*.*',
  	])
    .pipe(gulp.dest('./_dev/lib/imgs/sketch/base'));
});

gulp.task('imgs-components-copy', function() {
  return gulp.src([
      './_dev/_assets/sketch/components/*.*',
      './_dev/_assets/sketch/components/responsive/*.*',
  	])
    .pipe(gulp.dest('./_dev/lib/imgs/sketch/components'));
});

gulp.task("imgs-base-responsive", function () {

 var imgSrcPaths ={
    src: ['_dev/_assets/sketch/base/responsive/*.*'],
    dest: '_dev/lib/imgs/sketch/base'
  };

  function GenImages(value){
    gulp.src(imgSrcPaths.src)
    .pipe(imageResize({ width : value }))
    .pipe(rename(function (path) { 
      path.basename += '_'+value+'px';
      //path.dirname += "/"+ value;
    }))
    .pipe(imageOp({
          optimizationLevel: 7,
          progressive: true,
          interlaced: true
    }))
    .pipe(gulp.dest(imgSrcPaths.dest));
  }


   var imgBreakpoints = {
    sizes: [350,795,1118,1511,1826,2147,2450],
  };

  
  for ( var i = 0; i < imgBreakpoints.sizes.length; i++) {
    var objs = imgBreakpoints.sizes[i];
    console.log(imgSrcPaths.src+ '------' + objs);

    // 5min LOOP
    
    GenImages(objs)
    }
});

gulp.task("imgs-components-responsive", function () {


 var imgSrcPaths ={
    src: ['_dev/_assets/sketch/components/responsive/*.*'],
    dest: '_dev/lib/imgs/sketch/components'
  };

  function GenImages(value){
    gulp.src(imgSrcPaths.src)
    .pipe(imageResize({ width : value }))
    .pipe(rename(function (path) { 
      path.basename += '_'+value+'px';
      //path.dirname += "/"+ value;
    }))
    .pipe(imageOp({
          optimizationLevel: 7,
          progressive: true,
          interlaced: true
    }))
    .pipe(gulp.dest(imgSrcPaths.dest));
  }


   var imgBreakpoints = {
    sizes: [350,795,1118,1511,1826,2147,2450],
  };

  
  for ( var i = 0; i < imgBreakpoints.sizes.length; i++) {
    var objs = imgBreakpoints.sizes[i];
    console.log(imgSrcPaths.src+ '------' + objs);

    // 5min LOOP
    
    GenImages(objs)
    }
});






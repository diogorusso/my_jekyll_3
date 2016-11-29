

var gulp 	= require('gulp');
var lodash  = require('lodash');
var shell   = require('gulp-shell');
var imageOp = require('gulp-image-optimization');
var base64 = require('gulp-base64');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");
var clean = require('gulp-clean');
var config = require('../../config').watch;




gulp.task("imgsResponsive", function () {


 var imgSrcPaths ={
    src: ['_dev/_assets/imgs/*.jpg',],
    dest: '_dev/lib/imgs/GULP-PSD'
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
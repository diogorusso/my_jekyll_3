var gulp 	= require('gulp');
var lodash  = require('lodash');
var shell   = require('gulp-shell');
var imageOp = require('gulp-image-optimization');
var base64 = require('gulp-base64');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");
var clean = require('gulp-clean');
var config = require('../../config').watch;


// PSD Extract
gulp.task('psd', shell.task(['node PSD']));


//COPY FIXED SIZE IMGS



//COPY RESPONSIVE IMGS
//RESIZE RESPONSIVE IMGS

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

//RENAME RESPONSIVE IMG





/*

TASKS

src folder: lib/_assets/_imgs
dest: lib/imgs



============================

imgsSite --> MAIN IMGS TASK

============================

STACTIC


Site

imgsAssetsClean : delete all asset images
imgsAssets : save asset images



SVG VECTORS

imgsAssetsClean : delete all asset images
imgsAssets : save asset images


===========================

RESPONSIVE

Posts

imgsPostsClean : delete all post images
imgsPosts : 
  GenImages : 
    image resize / rename / save lib / optimize
    breakpoint loop


Hero

imgsBannersClean :
imgsBanners : 
  GenImages : 
    image resize / rename / save lib / optimize


*/


// ====== IMAGES --> ASSETS =======









// SITE IMAGES

gulp.task("imgsSite", [
  'imgsPostsClean', 'imgsAssetsClean', 'imgsBannersClean', 'imgsPosts', "imgsAssets", "imgsBanners"
  ]);


gulp.task('imgsPostsClean', function () {
  return gulp.src('lib/imgs/posts', {read: false})
    .pipe(clean());
});


// PSD Extract
gulp.task('psd', shell.task(['node PSD']));


// ====== IMAGES --> ASSETS =======

// SITE IMAGES

gulp.task('imgsAssetsClean', function () {
  return gulp.src('lib/imgs/site', {read: false})
    .pipe(clean());
});

gulp.task("imgsAssets",['imgsAssetsClean'] ,function () {
  gulp.src("_assets/_imgs/site/**/*.{jpg,png,gif,ico}")
     .pipe(imageOp({
          optimizationLevel: 5,
          progressive: true,
          interlaced: true
    }))
    .pipe(gulp.dest("lib/imgs/site"));
});


// ====== IMAGES --> RESPONISVE =======

// POST IMAGES


gulp.task("imgsPosts", ['imgsPostsClean'] , function () {


 var imgSrcPaths ={
    src: '_assets/_imgs/posts/**/*.**',
    dest: 'lib/imgs/posts'
  };

  function GenImages(value){
    gulp.src(imgSrcPaths.src)
    .pipe(imageResize({ width : value }))
    .pipe(rename(function (path) { 
      path.dirname += "/"+ value;
    }))
    .pipe(imageOp({
          optimizationLevel: 5,
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
    console.log(objs);
    GenImages(objs)
  }
});


// HEROS + BANNERS
3
gulp.task('imgsBannersClean', function () {
  return gulp.src('lib/imgs/banners', {read: false})
    .pipe(clean());
});

gulp.task("imgsBanners", ['imgsBannersClean'] , function () {


 var imgSrcPaths ={
    src: '_assets/_imgs/banners/**/*.**',
    dest: 'lib/imgs/banners'
  };

  function GenImages(value){
    gulp.src(imgSrcPaths.src)
    .pipe(imageResize({ width : value }))
    .pipe(rename(function (path) { 
      path.dirname += "/"+ value;
    }))
    .pipe(imageOp({
          optimizationLevel: 5,
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
    console.log(objs);
    GenImages(objs)
    }


});


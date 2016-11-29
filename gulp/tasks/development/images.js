var gulp 	= require('gulp');
var lodash  = require('lodash');
var shell   = require('gulp-shell');
var imageOp = require('gulp-image-optimization');
var base64 = require('gulp-base64');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");
var clean = require('gulp-clean');

// PSD export
// PNG optimization
// Base64 for small PNGs

//IMAGES
gulp.task("site-images", ['hero-images','structure-images']);



// STRUCTURE IMGs

gulp.task('structure-imgs-clean', function () {
  return gulp.src('lib/imgs/s', {read: false})
    .pipe(clean());
});

gulp.task("structure-images",['structure-imgs-clean'] ,function () {
  gulp.src("_assets/_imgs/structure/**/*.{jpg,png,gif,ico}")
     .pipe(imageOp({
          optimizationLevel: 5,
          progressive: true,
          interlaced: true
    }))
    .pipe(gulp.dest("lib/imgs/s"));
});




// HERO IMGs sizes breakpoints

gulp.task("hero-images", ['hero-imgs-clean','hero-img320','hero-img640','hero-img1024','hero-img1440','hero-img1920','hero-img2420']);

gulp.task('hero-imgs-clean', function () {
  return gulp.src('lib/imgs/h', {read: false})
    .pipe(clean());
});

gulp.task("hero-img320", function () {
  gulp.src("_assets/_imgs/heros/**/*.jpg")
    .pipe(imageResize({ width : 320 }))
    .pipe(rename(function (path) { path.basename += "-320"; }))
    .pipe(gulp.dest("lib/imgs/h"));
});


gulp.task("hero-img640", function () {
  gulp.src("_assets/_imgs/heros/**/*.jpg")
    .pipe(imageResize({ width : 640 }))
    .pipe(rename(function (path) { path.basename += "-640"; }))
     .pipe(imageOp({
          optimizationLevel: 5,
          progressive: true,
          interlaced: true
    }))
    .pipe(gulp.dest("lib/imgs/h"));
});

gulp.task("hero-img1024", function () {
  gulp.src("_assets/_imgs/heros/**/*.jpg")
    .pipe(imageResize({ width : 1024 }))
    .pipe(rename(function (path) { path.basename += "-1024"; }))
    .pipe(imageOp({
          optimizationLevel: 5,
          progressive: true,
          interlaced: true
    }))
    .pipe(gulp.dest("lib/imgs/h"));
});

gulp.task("hero-img1440", function () {
  gulp.src("_assets/_imgs/heros/**/*.jpg")
    .pipe(imageResize({ width : 1440 }))
    .pipe(rename(function (path) { path.basename += "-1440"; }))
    .pipe(imageOp({
          optimizationLevel: 5,
          progressive: true,
          interlaced: true
    }))
    .pipe(gulp.dest("lib/imgs/h"));
});

gulp.task("hero-img1920", function () {
  gulp.src("_assets/_imgs/heros/**/*.jpg")
    .pipe(imageResize({ width : 1920 }))
    .pipe(rename(function (path) { path.basename += "-1920"; }))
    .pipe(imageOp({
          optimizationLevel: 5,
          progressive: true,
          interlaced: true
    }))
    .pipe(gulp.dest("lib/imgs/h"));
});
gulp.task("hero-img2420", function () {
  gulp.src("_assets/_imgs/heros/**/*.jpg")
    .pipe(imageResize({ width : 2420 }))
    .pipe(rename(function (path) { path.basename += "-2420"; }))
    .pipe(imageOp({
          optimizationLevel: 0,
          progressive: true,
          interlaced: true
    }))
    .pipe(gulp.dest("lib/imgs/h"));
});





// PSD IMGs Hero
gulp.task('psd', shell.task(['node PSD']));



// PSD IMGs Content


// Base 64
gulp.task('base64', function() {
  return gulp.src('./_assets/_sass/**/*.scss')
    .pipe(base64({
    	extensions: ['png'],
      	maxImageSize: 20 * 1024, // bytes
      	debug: false 
    }))
    .pipe(gulp.dest('./_assets/_sass/base64'));
});

// PNG optimization
gulp.task('image-optimization', function(cb) {
    gulp.src(['lib/imgs/**/*.png','lib/imgs/**/*.jpg','lib/imgs/**/*.gif','lib/imgs/**/*.jpeg'])
        .pipe(imageOp({
          optimizationLevel: 1,
          progressive: true,
          interlaced: true
    }))
        .pipe(gulp.dest('lib/imgs')).on('end', cb).on('error', cb);
});




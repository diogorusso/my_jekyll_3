var gulp 	= require('gulp');
var shell   = require('gulp-shell');

// PSD Extract
gulp.task('psd', shell.task(['node PSD']));
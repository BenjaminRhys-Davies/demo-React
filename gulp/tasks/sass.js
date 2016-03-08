var config = require('../config.js').sass;
var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  gulp.src(config.src)
  .pipe(sassGlob())
  .pipe(sourcemaps.init())
  .pipe(sass(config.settings))
  .pipe(sourcemaps.write(config.maps.dest, config.maps.opts))
  .pipe(gulp.dest(config.dest))
  .pipe(connect.reload());
});

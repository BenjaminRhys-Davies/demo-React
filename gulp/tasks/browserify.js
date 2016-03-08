var config = require('../config').browserify;
var browserify = require('browserify');
var gulp = require('gulp');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

watchify.args.debug = config.debug;
var bundler = watchify(browserify(config.src, watchify.args));
config.settings.transformations.forEach(function (t) {
  bundler.transform(t.transform, t.opts);
});

var bundle = function () {
  return bundler
  .bundle()
  .pipe(source(config.outputName))
  .pipe(buffer())
  .pipe(sourcemaps.init({ loadMaps: true }))
    // transformations
    .pipe(uglify())
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .pipe(sourcemaps.write(config.maps.dest, config.maps.opts))
  .pipe(gulp.dest(config.dest))
  .pipe(connect.reload());
};

gulp.task('browserify', bundle);
bundler.on('update', bundle);

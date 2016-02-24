var config = require('../config.js').sass;
var gulp = require('gulp');
var cache = require('gulp-cached');
var scsslint = require('gulp-scss-lint');

gulp.task('scss-lint', function() {
  return gulp.src(config.all)
    .pipe(cache('scsslint'))
    .pipe(scsslint(config.lint));
});

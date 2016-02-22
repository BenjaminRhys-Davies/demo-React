var config = require('../config.js').sass;
var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');

gulp.task('scss-lint', function() {
  return gulp.src(config.all)
    .pipe(scsslint(config.lint));
});

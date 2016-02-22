var dest = './dist';
var src = './src';
var gutil = require('gulp-util');

module.exports = {
  server: {
    settings: {
      root: dest,
      host: 'localhost',
      port: 8080,
      livereload: {
        port: 35929
      }
    }
  },
  sass: {
    src: src + '/presentation/index.scss',
    all: [ src + '/presentation/*.scss', src + '/presentation/*/*.scss', '!' + src + '/presentation/_reset.scss' ],
    dest: dest,
    settings: {
      indentedSyntax: false,
      imagePath: '/images',
      outputStyle: 'compressed'
    }
  },
  browserify: {
    settings: {
      transform: ['reactify', 'babelify']
    },
    src: src + '/behaviour/index.jsx',
    dest: dest,
    outputName: 'index.js',
    debug: gutil.env.type === 'dev'
  },
  html: {
    src: 'src/index.html',
    dest: dest
  },
  assets: {
    src: 'src/assets/**/*.{png,jpg,gif,ico,xml,txt}',
    dest: dest
  },
  watch: {
    src: 'src/**/*.*',
    tasks: ['build']
  }
};

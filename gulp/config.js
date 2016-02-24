var gutil = require('gulp-util');

var dest = './dist';
var src = './src';
var maps = './maps';

var presentation = src + '/presentation';
var behaviour = src + '/behaviour';

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
    src: presentation+ '/index.scss',
    all: [ presentation + '/*.scss', presentation + '/*/*.scss', '!' + presentation + '/_reset.scss' ],
    dest: dest,
    settings: {
      indentedSyntax: false,
      imagePath: '/images',
      outputStyle: 'compressed'
    },
    sourceRoot: presentation,
    mapsDest: maps
  },
  browserify: {
    settings: {
      transformations: [
        { transform: 'reactify' },
        { transform: 'babelify', opts: { presets: ['es2015', 'react'] }}
      ]
    },
    src: behaviour + '/index.jsx',
    dest: dest,
    outputName: 'index.js',
    debug: gutil.env.type === 'dev',
    maps: {
      opts: { sourceRoot: behaviour },
      dest: maps
    }
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

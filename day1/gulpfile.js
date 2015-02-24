/* jshint node: true */
'use strict';


var g               = require('gulp-load-plugins')();
var gulp            = require('gulp');
var runSequence     = require('run-sequence');


// === Paths ===

var src             = {toString: function() { return 'src' }};
src.app             = {toString: function() { return src + '/app' }};
src.app.files       = src.app + '/**/*.js';
src.index           = src + '/index.html';

var vendor          = {toString: function() { return 'bower_components' }};


// === Develpement ===

gulp.task('jshint', function() {
  return gulp.src(src.app.files)
    .pipe(g.jshint())
    .pipe(g.jshint.reporter('jshint-stylish'));
});

gulp.task('serve', function() {
  return g.connect.server({
    host: 'localhost',
    port: '8000',
    root: ''+src,
    middleware: function(connect, options) {
      return [
        connect().use('/' + vendor, connect.static(''+vendor))
      ];
    }
  });
});

gulp.task('watch', function() {
  g.livereload.listen();

  // compile handlers
  gulp.watch(src.app.files, ['jshint']);

  // livereload handlers
  gulp.watch([
      src.app.files,
      src.index,
    ]).on('change', g.livereload.changed);
});


// === Main tasks definitions ===

gulp.task('default', function() {
  return runSequence(
    ['jshint', 'serve'],
    'watch'
  );
});

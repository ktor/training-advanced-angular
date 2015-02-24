/* jshint node: true */
'use strict';


var del             = require('del');
var g               = require('gulp-load-plugins')();
var gulp            = require('gulp');
var runSequence     = require('run-sequence');


// === Paths ===

var src             = {toString: function() { return 'src' }};
src.app             = {toString: function() { return src + '/app' }};
src.app.files       = src.app + '/**/*.js';
src.index           = src + '/index.html';

var dist            = {toString: function() { return 'dist' }};
dist.index          = dist + '/index.html';

var vendor          = {toString: function() { return 'bower_components' }};


// === Develpement ===

gulp.task('clean', function(cb) {
  return del([
    dist + '/*',
  ], cb);
});

gulp.task('index', function() {
  var sources = gulp.src(src.app.files, {read: false});

  return gulp.src(src.index)
    .pipe(g.inject(sources, {
      addRootSlash: false,
      ignorePath: '/src',
    }))
    .pipe(gulp.dest(''+dist));
});

gulp.task('jshint', function() {
  return gulp.src(src.app.files)
    .pipe(g.jshint())
    .pipe(g.jshint.reporter('jshint-stylish'));
});

gulp.task('serve', function() {
  return g.connect.server({
    host: 'localhost',
    port: '8000',
    root: [''+dist, ''+src],
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
  gulp.watch(src.app.files, ['index', 'jshint']);
  gulp.watch(src.index, ['index']);

  // livereload handlers
  gulp.watch([
      src.app.files,
      src.index,
    ]).on('change', g.livereload.changed);
});


// === Main tasks definitions ===

gulp.task('default', function() {
  return runSequence(
    ['index', 'jshint', 'serve'],
    'watch'
  );
});
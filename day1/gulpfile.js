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
src.app.templates   = src.app + '/**/*.html';
src.index           = src + '/index.html';

var dist            = {toString: function() { return 'dist' }};
dist.index          = dist + '/index.html';
dist.app            = {toString:function() { return dist + '/app' }};
dist.app.templates  = dist.app + '/templates.js';

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

gulp.task('templates', function() {
  return gulp.src(src.app.templates)
    .pipe(g.angularTemplatecache({
      module: 'aa.templates',
      standalone: true,
      root: 'app',
    }))
    .pipe(gulp.dest(''+dist.app));
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
  gulp.watch(src.app.templates, ['templates']);
  gulp.watch(src.index, ['index']);

  // livereload handlers
  gulp.watch([
      src.app.files,
      dist.app.templates,
      dist.index,
    ]).on('change', g.livereload.changed);
});

// === Test tasks ===

gulp.task('karma', function() {
  gulp.src('foobar')  // intentional nonsense, files are configured in configFile
    .pipe(g.karma({
      action: 'watch',
      browsers: ['PhantomJS'],
      configFile: 'karma.conf.js'
    }))
      .on('error', function(err) { g.util.log(g.util.colors.red(err)) });
});


// === Main tasks definitions ===

gulp.task('default', function() {
  return runSequence(
    ['index', 'jshint', 'templates', 'serve'],
    'watch'
  );
});

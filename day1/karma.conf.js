/* jshint node: true */
'use strict';


module.exports = function(config) {
  config.set({
    frameworks: [
      'jasmine'
    ],

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',

      'src/app/**/*.js',
      'test/unit/**/*.js'
    ],

    reporters: [
      'progress'
    ]
  });
};

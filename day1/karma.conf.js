/* jshint node: true */
'use strict';


module.exports = function(config) {
  config.set({
    frameworks: [
      'jasmine'
    ],

    files: [
      'bower_components/messageformat/messageformat.js',
      'bower_components/messageformat/locale/en.js',
      'bower_components/messageformat/locale/sk.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-jwt/dist/angular-jwt.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'bower_components/ngstorage/ngStorage.js',
      'bower_components/ui-router/release/angular-ui-router.js',
      'bower_components/angular-mocks/angular-mocks.js',

      'dist/app/templates.js',
      'src/app/**/*.js',
      'test/unit/**/*.js'
    ],

    reporters: [
      'progress'
    ]
  });
};

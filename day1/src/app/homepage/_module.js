angular.module('aa.homepage', [
])

.config(function($stateProvider) {
  'use strict';

  $stateProvider
    .state('homepage', {
      url: '',
      abstract: true
    })
    .state('homepage.index', {
      url: '',
      views: {
        'layout@': {
          controller: 'Homepage.IndexController',
          templateUrl: 'app/_shared/layouts/1col.html'
        },
        '@homepage.index': {
          templateUrl: 'app/homepage/views/index.html'
        }
      }
    });
});

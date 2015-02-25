angular.module('aa.homepage', [
])

.config(function($stateProvider) {
  'use strict';

  $stateProvider
    .state('homepage', {
      url: '',
      abstract: true
    })
    .state('homepage.foo', {
      url: '/foo',
      views: {
        'layout@': {
          controller: 'Homepage.FooController as ctrl',
          templateUrl: 'app/_shared/layouts/1col.html'
        },
        '@homepage.foo': {
          templateUrl: 'app/homepage/views/foo.html'
        }
      }
    })
    .state('homepage.index', {
      url: '/:q',
      views: {
        'layout@': {
          controller: 'Homepage.IndexController',
          templateUrl: 'app/_shared/layouts/1col.html'
        },
        '@homepage.index': {
          templateUrl: 'app/homepage/views/index.html'
        }
      },
      resolve: {
        isAuthenticated: 'checkIsAuth'
      }
    });
});

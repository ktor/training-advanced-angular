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
      url: '/?q',
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
    })
    .state('homepage.form', {
      url: '/form',
      views: {
        'layout@': {
          controller: 'Homepage.FormController as ctrl',
          templateUrl: 'app/_shared/layouts/1col.html'
        },
        '@homepage.form': {
          templateUrl: 'app/homepage/views/form.html'
        }
      }
    });
});

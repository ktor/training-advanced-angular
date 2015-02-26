angular.module('aa.feed', [
])

.config(function($stateProvider, apiProvider) {
  'use strict';

  $stateProvider
    .state('feed', {
      url: '/feed',
      abstract: true,
      resolve: {
        isAuthenticated: 'AuthCheckFactory'
      }
    })
    .state('feed.index', {
      url: '',
      views: {
        'layout@': {
          controller: 'Feed.IndexController',
          templateUrl: 'app/_shared/layouts/1col-narrow.html'
        },
        '@feed.index': {
          templateUrl: 'app/feed/views/index.html'
        }
      }
    });

  apiProvider.endpoint('posts')
    .route('/posts/:uuid');
});

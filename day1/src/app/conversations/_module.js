angular.module('aa.conversations', [
])

.config(function($stateProvider) {
  'use strict';

  $stateProvider
    .state('conversations', {
      url: '/conversations',
      abstract: true
    })
    .state('conversations.index', {
      url: '',
      views: {
        'layout@': {
          controller: 'Conversations.IndexController',
          templateUrl: 'app/_shared/layouts/1col-narrow.html'
        },
        '@conversations.index': {
          templateUrl: 'app/conversations/views/index.html'
        }
      }
    });
});

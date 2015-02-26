angular.module('aa.auth', [
])

.config(function($stateProvider, apiProvider) {
  'use strict';

  $stateProvider
    .state('auth', {
      url: '/auth',
      abstract: true
    })
    .state('auth.login', {
      url: '/login',
      views: {
        'layout@': {
          controller: 'Auth.LoginController as ctrl',
          templateUrl: 'app/_shared/layouts/1col-narrow.html'
        },
        '@auth.login': {
          templateUrl: 'app/auth/views/login.html'
        }
      }
    });

  apiProvider.endpoint('auth')
    .route('/auth/:action')
    .addUnsecuredAction('login', 'POST', {action: 'login'});
});
angular.module('aa.auth')

.controller('Auth.LoginController', function($scope, $state, auth) {
  'use strict';
  $scope.data = {};

  this.login = function() {
    auth.login($scope.data.username, $scope.data.password)
      .then(function() {
        $state.go('feed.index');
      })
      .catch(function() {
        alert('Login failed');
      });
  };
});

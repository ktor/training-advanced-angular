angular.module('aa.homepage')

.controller('Homepage.IndexController', function($scope) {
  'use strict';

  this.setMessage = function() {
    $scope.message = 'Lorem ipsum dolor sit amet';
  };

  $scope.message = 'Hello from Homepage.IndexController';
});

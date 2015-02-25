angular.module('aa.homepage')

.controller('Homepage.IndexController', function($scope, $stateParams, githubRepository) {
  'use strict';
  $scope.message = 'Hello from Homepage.IndexController';

  this.setMessage = function() {
    $scope.message = 'Lorem ipsum dolor sit amet';
  };

  githubRepository.loadSearch('tetris').then(function(results) {
    console.log(results);
  });
});

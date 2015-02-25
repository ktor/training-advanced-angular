angular.module('aa.homepage')

.controller('Homepage.IndexController', function($scope, $stateParams, githubRepository) {
  'use strict';
  $scope.data = {};
  $scope.message = 'Hello from Homepage.IndexController';

  this.setMessage = function() {
    $scope.message = 'Lorem ipsum dolor sit amet';
  };

  if ($stateParams.q) {
    githubRepository.loadSearch($stateParams.q).then(function(res) {
      $scope.data.searchResults = res.items;
    });
  }
});

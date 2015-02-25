angular.module('aa.homepage')

.controller('Homepage.IndexController', function($scope, myThing) {
  'use strict';

  console.log(myThing);
  console.log(myThing.getMessage());

  this.setMessage = function() {
    $scope.message = 'Lorem ipsum dolor sit amet';
  };

  $scope.message = 'Hello from Homepage.IndexController';
});

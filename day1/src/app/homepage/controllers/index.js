angular.module('aa.homepage')

.controller('Homepage.IndexController', function($scope, Vehicle, Bike) {
  'use strict';

  console.log(Bike);

  var bike = new Bike();
  console.log(bike);

  bike.drive();

  console.log(bike instanceof Bike);
  console.log(bike instanceof Vehicle);


  this.setMessage = function() {
    $scope.message = 'Lorem ipsum dolor sit amet';
  };

  $scope.message = 'Hello from Homepage.IndexController';
});

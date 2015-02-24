/* jshint node: true, jasmine: true */
/* global inject */
'use strict';

describe('aa.homepage.Homepage.IndexController', function() {
  var $scope,
      ctrl;

  beforeEach(module('aa.homepage'));
  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    ctrl = $controller('Homepage.IndexController', {$scope: $scope});
  }));


  it('shoud populate default message', function() {
    expect($scope.message).toBe('Hello from Homepage.IndexController');
  });

  it('shoud change default message by controller action', function() {
    ctrl.setMessage();
    expect($scope.message).toBe('Lorem ipsum dolor sit amet');
  });
});

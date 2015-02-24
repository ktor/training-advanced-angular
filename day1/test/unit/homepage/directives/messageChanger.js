/* jshint node: true, jasmine: true */
/* global inject */
'use strict';

describe('aa.homepage.messageChanger', function() {
  /* jshint maxstatements: 10 */
  var $scope,
      scope,
      ctrl,
      el,
      markup = '<message-changer message="message" change-to="lorem ipsum" />';

  beforeEach(module('aa.templates'));
  beforeEach(module('aa.homepage'));
  beforeEach(inject(function($rootScope, $compile) {
    el = angular.element(markup);
    $scope = $rootScope.$new();
    $scope.message = 'Hello from test';

    $compile(el)($scope);
    $scope.$digest();
    scope = el.isolateScope();
    ctrl = el.controller('messageChanger');
  }));


  it('should prepare directive', function() {
  });
});

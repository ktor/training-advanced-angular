angular.module('aa.homepage')

.service('myThing', function() {
  'use strict';

  var privateVar = 'foo';
  this.publicVar = 'bar';

  this.getMessage = function() {
    return [privateVar, this.publicVar];
  };
});


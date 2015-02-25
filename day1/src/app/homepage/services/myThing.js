angular.module('aa.homepage')

.service('myThing', function($q) {
  'use strict';

  var privateVar = 'foo';
  var dfd = $q.defer();
  this.publicVar = 'bar';

  this.getMessage = function() {
    setTimeout(function() {
      // dfd.resolve([privateVar, this.publicVar]);
      dfd.reject({error: '403'});
    }, 250);

    return dfd.promise;
  };
});


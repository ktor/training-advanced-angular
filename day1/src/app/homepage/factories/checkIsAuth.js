angular.module('aa.homepage')

.factory('checkIsAuth', function($state, myThing) {
  'use strict';

  var promise = myThing.getMessage();

  promise.catch(function(reason) {
    console.log(reason);
    $state.go('homepage.foo');
  });

  return promise;
});

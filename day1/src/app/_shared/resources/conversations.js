angular.module('aa.shared')

.factory('conversationsResource', function($resource) {
  'use strict';

  var Res = $resource('//localhost:3000/conversations', {

  }, {

  });


  return Res;
});

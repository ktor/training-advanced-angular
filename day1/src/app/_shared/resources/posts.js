angular.module('aa.shared')

.factory('postsResource', function($resource) {
  'use strict';

  var Res = $resource('//localhost:3000/posts/:uuid', {

  }, {
    load: {
      method: 'GET',
      isArray: true
    }
  });


  return Res;
});

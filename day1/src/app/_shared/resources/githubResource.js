angular.module('aa.shared')

.factory('githubResource', function($resource, githubApiUrl) {
  'use strict';

  var ghResource = $resource(githubApiUrl + '/:command/:item', {

  }, {
    search: {
      method: 'GET',
      params: {
        command: 'search',
        item: 'repositories'
      }
    }
  });

  return ghResource;
});

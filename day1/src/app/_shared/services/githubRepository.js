angular.module('aa.shared')

.service('githubRepository', function(githubResource) {
  'use strict';

  var requestsCache = {};

  this.loadSearch = function(q) {
    var cacheKey = 'loadSearch' + q;

    if (!requestsCache[cacheKey]) {
      requestsCache[cacheKey] = githubResource.search({q: q});
    }

    return requestsCache[cacheKey].$promise;
  };
});

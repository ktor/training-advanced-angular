angular.module('aa.shared')

.service('githubRepository', function($http, $q) {
  'use strict';

  this.loadSearch = function(q) {
    var req1 = $http.get('//api.github.com/search/repositories?q=' + q);
    var req2 = $http.get('//api.github.com/search/repositories?q=' + q.toUpperCase());

    return $q.all([req1, req2]);
  };
});

angular.module('aa.shared')

.service('postsRepository', function(api) {
  'use strict';

  this.load = function() {
    return api.posts.get();
  };
});

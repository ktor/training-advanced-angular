angular.module('aa.shared')

.service('postsRepository', function(api) {
  'use strict';

  var requestsCache = {};

  this.load = function() {
    var cacheKey = 'load';

    if (!requestsCache[cacheKey]) {
      requestsCache[cacheKey] = api.posts.get();
    }

    return requestsCache[cacheKey];
  };

  this.loadMore = function() {
    this.load().then(function(payload) {
      var from = payload.data.posts.length;

      api.posts.get({from: from}).then(function(lmPayload) {
        var newPosts = lmPayload.data.posts;

        [].push.apply(payload.data.posts, newPosts);
        payload.meta.posts.hasMore = lmPayload.meta.posts.hasMore;
      });
    });

  };
});

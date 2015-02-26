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

      api.posts.get({
        from: from
      }).then(function(lmPayload) {
        var newPosts = lmPayload.data.posts;

        [].push.apply(payload.data.posts, newPosts);
        payload.meta.posts.hasMore = lmPayload.meta.posts.hasMore;
      });
    });

  };

  this.delete = function(post) {
    api.posts.remove({
      uuid: post.uuid
    });
    var cachedFeedsPromise = this.load();
    cachedFeedsPromise.then(function(feeds) {
      var postToDeleteIndex = _.findIndex(feeds.data.posts, function(cachedPost) {
        return cachedPost.uuid === post.uuid;
      });
      if (postToDeleteIndex != -1) {
        feeds.data.posts.splice(postToDeleteIndex, 1);
      };
    });
  };
});

angular.module('aa.feed')

.controller('Feed.IndexController', function FeedIndexController($scope, postsRepository) {
  'use strict';

  $scope.data = {};
  $scope.meta = {};


  this.loadMore = function() {
    postsRepository.loadMore();
  };

  this.delete = function(post) {
    postsRepository.delete(post);
  };

  postsRepository.load().then(function(payload) {
    $scope.data.posts = payload.data.posts;
    $scope.meta.posts = payload.meta.posts;
  });
});

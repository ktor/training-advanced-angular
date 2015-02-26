angular.module('aa.feed')

.controller('Feed.IndexController', function($scope, postsRepository) {
  'use strict';

  $scope.data = {};

  postsRepository.load().then(function(posts) {
    $scope.data.posts = posts;
  });
});

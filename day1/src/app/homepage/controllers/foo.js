angular.module('aa.homepage')

.controller('Homepage.FooController', function($scope, $translate) {
  'use strict';

  $scope.data = {
    lang: $translate.use()
  };

  this.setLang = function(lang) {
    $translate.use(lang);
    $scope.data.lang = lang;
  };

  this.submit = function() {
    console.log('sdfsdf');
  };
});

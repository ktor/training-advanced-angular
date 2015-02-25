angular.module('aa.homepage')

.controller('Homepage.FormController', function($scope, $translate) {
  'use strict';

  $scope.data = {
    lang: $translate.use(),
    password: ''
  };

  this.setLang = function(lang) {
    $translate.use(lang);
    $scope.data.lang = lang;
  };

  this.submit = function() {
    console.log('sdfsdf');
  };
});

angular.module('aa', [
  'aa.homepage'
])

.run(function($rootScope) {
  'use strict';

  $rootScope.message = 'Hello World!';
});

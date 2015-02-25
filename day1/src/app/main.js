angular.module('aa', [
  'ui.router',

  'aa.templates',
  'aa.shared',
  'aa.homepage'
])

.config(function(userProvider) {
  console.log(userProvider.preferredLanguage);
  userProvider.setSessionLength(2000);
})

.run(function($rootScope) {
  'use strict';

});

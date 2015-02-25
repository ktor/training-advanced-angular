angular.module('aa', [
  'ngResource',
  'ngMessages',
  'ui.router',

  'aa.templates',
  'aa.shared',
  'aa.homepage'
])

.config(function(userProvider) {
  'use strict';

  console.log(userProvider.preferredLanguage);
  userProvider.setSessionLength(2000);
})

.run(function($rootScope) {
  'use strict';

});

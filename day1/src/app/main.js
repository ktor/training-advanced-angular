angular.module('aa', [
  'ngResource',
  'ngMessages',
  'pascalprecht.translate',
  'ui.router',

  'aa.templates',
  'aa.shared',
  'aa.homepage'
])

.config(function($translateProvider, userProvider) {
  'use strict';

  $translateProvider
    .preferredLanguage(userProvider.preferredLanguage);
})

.run(function($rootScope) {
  'use strict';

});

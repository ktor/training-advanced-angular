angular.module('aa', [
  'angular-jwt',
  'ngResource',
  'ngMessages',
  'ngStorage',
  'pascalprecht.translate',
  'ui.router',

  'aa.templates',
  'aa.shared',
  'aa.auth',
  'aa.homepage',
  'aa.feed'
])

.config(function($translateProvider, userProvider) {
  'use strict';

  $translateProvider
    .preferredLanguage(userProvider.preferredLanguage)
    .useMessageFormatInterpolation()
    .useStaticFilesLoader({
      prefix: '/app/_shared/translations/',
      suffix: '.json'
    });
})

.config(function(apiProvider) {
  'use strict';

  apiProvider.setBaseUrl('//localhost:3000/fakeapi');
})

.run(function($rootScope, $localStorage, user) {
  'use strict';

  user.init($localStorage.user);
});

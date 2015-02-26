angular.module('aa', [
  'ngResource',
  'ngMessages',
  'pascalprecht.translate',
  'ui.router',

  'aa.templates',
  'aa.shared',
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

.run(function($rootScope) {
  'use strict';

});

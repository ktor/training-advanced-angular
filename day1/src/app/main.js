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

.config(function($httpProvider, jwtInterceptorProvider) {
  'use strict';

  $httpProvider.interceptors.push('err401Interceptor');
  $httpProvider.interceptors.push('jwtInterceptor');

  jwtInterceptorProvider.tokenGetter = ['user', function(user) {
    return user.jwtToken;
  }];
})

.run(function($rootScope, $localStorage, user) {
  'use strict';

  user.init($localStorage.user);
});

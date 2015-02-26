angular.module('aa', [
  'angular-jwt',
  'ngResource',
  'ngMessages',
  'ngStorage',
  'ngAnimate',
  'pascalprecht.translate',
  'ui.router',

  'aa.templates',
  'aa.shared',
  'aa.auth',
  'aa.homepage',
  'aa.feed'
])

.config(function($stateProvider) {
  'use strict';

  $stateProvider
    .state('error', {
      abstract: true,
      views: {
        'layout@': {
          templateUrl: 'app/_shared/layouts/1col-narrow.html'
        }
      }
    })
    .state('error.404', {
      url: '*path', // catch all other URLs, this rule must come last!
      templateUrl: 'app/_shared/views/error/404.html'
    });
})

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

.run(function($rootScope, $localStorage, user, $location, $state) {
  'use strict';

  user.init($localStorage.user);
  if ($location.path() === "") {
    $state.go('homepage.index');
  };
});

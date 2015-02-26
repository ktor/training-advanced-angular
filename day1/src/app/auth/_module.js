angular.module('aa.auth', [
])

.config(function($stateProvider) {
  'use strict';

  $stateProvider
    .state('auth', {
      url: '/auth',
      abstract: true
    })
    .state('auth.login', {
      url: '/login',
      views: {
        'layout@': {
          controller: 'Auth.LoginController as ctrl',
          templateUrl: 'app/_shared/layouts/1col-narrow.html'
        },
        '@auth.login': {
          templateUrl: 'app/auth/views/login.html'
        }
      }
    });
})

.config(function(apiProvider) {
  'use strict';

  apiProvider.endpoint('auth')
    .route('/auth/:action')
    .addUnsecuredAction('login', 'POST', {action: 'login'});
})

.config(function($provide) {
  'use strict';

  $provide.decorator('auth', function($delegate) {
    var login = function(username, password) {
      var start = new Date();
      var promise = $delegate.login(username, password);

      promise.then(function () {
        console.log('Geo location took: ' + (new Date() - start) + 'ms');
      });

      return promise;
    };

    return {
      isAutheticated: $delegate.isAutheticated,
      login: login
    };
  });
});

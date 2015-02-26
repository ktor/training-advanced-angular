angular.module('aa.shared')

.service('auth', function() {
  'use strict';

  this.isAutheticated = function() {
    return false;
  };
})


.factory('AuthCheckFactory', function($q, $state, auth) {
  'use strict';

  var dfd = $q.defer();

  dfd.promise.catch(function(reason) {
    $state.go('auth.login');
  });

  if (auth.isAutheticated()) {
    dfd.resolve();
  } else {
    dfd.reject();
  }

  return dfd.promise;
});
